#!/usr/bin/env node
/*
** Deployment script - copies the dist directory up to the $web container
**
** Requirements:  Output from Terraform with an AZURE_STORAGE_CONNECTION_STRING
** pointing to the BLOB base container.
*/
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');
const readdirp = require('readdirp');
const { BlobServiceClient } = require('@azure/storage-blob');
const configuration = require('../../infrastructure/configuration.json');

/**
 * Uploads a file to the designated container.
 *
 * @param {ContainerClient} container the container client to upload to.
 * @param {String} filename filename of the file within the container
 * @param {String} filepath filename for the source file (fully-qualified)
 */
const uploadToContainer = async (container, filename, filepath) => {
  console.log(`--> Uploading ${filename}`);
  const blobClient = container.getBlockBlobClient(filename);
  const options = {
    blobHTTPHeaders: {
      blobContentType: mime.lookup(filepath) || 'application/octet-stream'
    }
  };
  try {
    const response = await blobClient.uploadFile(filepath, options);
  } catch (error) {
    console.log(`--> Upload results: (ERROR) ${error.message}`);
  }
};

// Create a connection client to the Azure Storage service.
const connectionString = configuration.AZURE_STORAGE_CONNECTION_STRING.value;
const serviceClient = BlobServiceClient.fromConnectionString(connectionString);
const containerClient = serviceClient.getContainerClient('$web');
const sourcedir = path.resolve(__dirname, '../dist');

console.log('Upload to Azure Storage:');
console.log(`--> Source: ${sourcedir}`);
console.log(`--> Destination: ${containerClient.url}`);

// Get all the files within the dist directory and transfer them to the
// storage container with the same name.
readdirp(sourcedir)
  .on('data', ({ path: filename, fullPath: filepath }) => {
    uploadToContainer(containerClient, filename, filepath);
  })
  .on('warn', (warning) => console.warn('[WARNING] ', warning))
  .on('error', (error) => console.error('[ERROR]', error))
  .on('end', () => console.info('[DONE]'));
