######################################################################
###
###       INPUT VARIABLES
###
######################################################################
variable "appname" {
  type = string
  default = "appname"
  description = "The short name for the application"
}

variable "displayname" {
  type = string
  default = "Application Name"
  description = "The user visible name for this application"
}

variable "region" {
  type = string
  default = "westus2"
  description = "The Azure region used for resources"
}

variable "environment" {
  type = string
  default = "dev"
  description = "The environment (dev, stage, test, prod, etc.)"
}

######################################################################
###
###       PROVIDER DEFINITIONS
###
######################################################################
provider "azurerm" {
  version = ">= 2.3.0"
  features {}
}

provider "azuread" {
  version = ">= 0.8.0"
}

provider "random" {
  version = "~> 2.2.1"
}

######################################################################
###
###       LOCAL VARIABLES
###
######################################################################
resource "random_string" "shortid" {
  length = 7
  upper = false
  lower = true
  number = true
  special = false
}

resource "random_string" "longid" {
  length = 23
  upper = false
  lower = true
  number = true
  special = false
}

locals {
  shortname   = "s${random_string.shortid.result}"
  longname    = "s${random_string.longid.result}"
  defaultname = "${var.appname}-${var.environment}"

  tags = {
    ApplicationName = var.appname
    Environment = var.environment
  }
}

######################################################################
###
###       RESOURCES
###
######################################################################

resource "azurerm_resource_group" "rg" {
  name                      = local.defaultname
  location                  = var.region
  tags                      = local.tags
}

resource "azurerm_storage_account" "storage" {
  name                      = local.longname
  resource_group_name       = azurerm_resource_group.rg.name
  location                  = azurerm_resource_group.rg.location
  tags                      = local.tags

  account_kind              = "StorageV2"
  account_tier              = "Standard"
  account_replication_type  = "LRS"
  static_website {
    index_document          = "index.html"
  }
}

resource "azurerm_application_insights" "appinsights" {
  name                      = local.defaultname
  resource_group_name       = azurerm_resource_group.rg.name
  location                  = azurerm_resource_group.rg.location
  tags                      = local.tags

  application_type          = "web"
}

######################################################################
###
###       OUTPUTS
###
######################################################################
output "INSTRUMENTATION_KEY" {
  value = azurerm_application_insights.appinsights.instrumentation_key
}

output "AZURE_STORAGE_CONNECTION_STRING" {
  value = azurerm_storage_account.storage.primary_connection_string
}

output "WEBSITE" {
  value = azurerm_storage_account.storage.primary_web_endpoint
}
