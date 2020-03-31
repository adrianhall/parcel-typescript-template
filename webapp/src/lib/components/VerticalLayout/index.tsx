import React from 'react';
import styles from './VerticalLayout.scss';

interface VerticalLayoutProps {
  /** The content pane for the vertical layout */
  children: React.ReactNode;
  /** The footer for the vertical layout */
  footer?: React.ReactNode;
  /** The header for the vertical layout */
  header?: React.ReactNode;
}

/**
 * A vertical layout component.  This will set up the header and footer
 * (if provided) in a flexbox configuration.
 *
 * @param {VerticalLayoutProps} props the component properties
 * @param {ReactNode} props.children the content for the main part of the layout
 * @param {ReactNode} [props.footer] the footer element
 * @param {ReactNode} [props.header] the header element
 * @returns {JSXElement} the rendered content
 */
const VerticalLayout: React.SFC<VerticalLayoutProps> =
  ({ children, footer, header }: VerticalLayoutProps) => (
    <div className={styles.fullPage}>
      {header && <div id="vertical-layout-header" className={styles.header}>{header}</div>}
      <div id="vertical-layout-content" className={styles.content}>{children}</div>
      {footer && <div id="vertical-layout-footer" className={styles.footer}>{footer}</div>}
    </div>
  );

export default VerticalLayout;
