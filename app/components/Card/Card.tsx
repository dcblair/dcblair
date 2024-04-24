import * as React from 'react';

type outlets =
  | 'body'
  | 'card'
  | 'description'
  | 'extra'
  | 'footer'
  | 'header'
  | 'headerInner'
  | 'skeleton'
  | 'title'
  | 'titleWrapper';

export interface CardProps {
  children: React.ReactNode;
  description?: React.ReactNode;
  extra?: React.ReactNode;
  footer?: React.ReactNode;
  loading?: boolean;
  size?: 'sm' | 'lg';
  styles?: { [K in outlets]?: React.CSSProperties };
  testid?: string;
  title?: React.ReactNode;
}

const CardBase = ({
  children,
  description,
  extra,
  footer,
  loading = false,
  size = 'sm',
  styles = {},
  testid,
  title,
}: CardProps) => {
  const headerSizes = {
    sm: 'leading-6 px-4 py-2 text-sm',
    lg: 'leading-6 px-6 py-3 text-sm',
  };

  const footerSizes = {
    sm: 'leading-6 px-4 py-2 text-sm',
    lg: 'leading-6 px-6 py-3 text-sm',
  };

  const skeletonSizes = {
    sm: 'py-3 px-4',
    lg: 'py-4 px-6',
  };

  const internalClassNames = {
    body: cn('bg-white', themeClassNames.body, classNames.body),
    card: cn(
      'w-full overflow-hidden  border border-gray-200 box-border rounded-xl drop-shadow-sm',
      themeClassNames.card,
      classNames.card,
    ),
    description: cn(
      'text-gray-500',
      themeClassNames.description,
      classNames.description,
    ),
    extra: cn('flex-shrink-0', themeClassNames.extra, classNames.extra),
    header: cn(
      'bg-white border-b border-gray-100 box-border',
      headerSizes[size],
      themeClassNames.header,
      classNames.header,
    ),
    headerInner: cn(
      'flex flex-wrap items-start justify-start sm:flex-nowrap gap-2',
      themeClassNames.headerInner,
      classNames.headerInner,
    ),
    footer: cn(
      'bg-gray-50 text-gray-500',
      footerSizes[size],
      themeClassNames.footer,
      classNames.footer,
    ),
    skeleton: cn(
      skeletonSizes[size],
      themeClassNames.skeleton,
      classNames.skeleton,
    ),
    title: cn(
      'font-bold text-gray-900',
      themeClassNames.title,
      classNames.title,
    ),
    titleWrapper: cn(
      'grow w-full',
      themeClassNames.titleWrapper,
      classNames.titleWrapper,
    ),
  };

  return (
    <div
      aria-live="polite"
      aria-busy={loading}
      className={internalClassNames.card}
      data-testid={testid && `${testid}-card`}
      style={{ ...themeStyles.card, ...styles.card }}
    >
      {(title || extra) && (
        <div
          className={internalClassNames.header}
          data-testid={testid && `${testid}-header`}
          style={{ ...themeStyles.header, ...styles.header }}
        >
          <div
            className={internalClassNames.headerInner}
            data-testid={testid && `${testid}-header-inner`}
            style={{ ...themeStyles.headerInner, ...styles.headerInner }}
          >
            <div
              className={internalClassNames.titleWrapper}
              data-testid={testid && `${testid}-title-wrapper`}
              style={{ ...themeStyles.titleWrapper, ...styles.titleWrapper }}
            >
              {title && (
                <h3
                  className={internalClassNames.title}
                  data-testid={testid && `${testid}-title`}
                  style={{ ...themeStyles.title, ...styles.title }}
                >
                  {title}
                </h3>
              )}
              {description && (
                <p
                  className={internalClassNames.description}
                  data-testid={testid && `${testid}-description`}
                  style={{ ...themeStyles.description, ...styles.description }}
                >
                  {description}
                </p>
              )}
            </div>
            {extra && (
              <div
                className={internalClassNames.extra}
                data-testid={testid && `${testid}-extra`}
                style={{ ...themeStyles.extra, ...styles.extra }}
              >
                {extra}
              </div>
            )}
          </div>
        </div>
      )}

      <div
        className={internalClassNames.body}
        data-testid={testid && `${testid}-body`}
        style={{ ...themeStyles.body, ...styles.body }}
      >
        {loading ? (
          <Skeleton
            testid={testid && `${testid}-skeleton`}
            classNames={{ wrapper: internalClassNames.skeleton }}
          />
        ) : React.isValidElement(children) ? (
          React.cloneElement(children, { size })
        ) : (
          children
        )}
      </div>

      {footer ? (
        <div
          className={internalClassNames.footer}
          data-testid={testid && `${testid}-footer`}
          style={{ ...themeStyles.footer, ...styles.footer }}
        >
          {footer}
        </div>
      ) : null}
    </div>
  );
};

export const Card = React.memo(CardBase);
