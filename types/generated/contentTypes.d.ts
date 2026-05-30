import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminSession extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_sessions';
  info: {
    description: 'Session Manager storage';
    displayName: 'Session';
    name: 'Session';
    pluralName: 'sessions';
    singularName: 'session';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    absoluteExpiresAt: Schema.Attribute.DateTime & Schema.Attribute.Private;
    childId: Schema.Attribute.String & Schema.Attribute.Private;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deviceId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    expiresAt: Schema.Attribute.DateTime &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::session'> &
      Schema.Attribute.Private;
    origin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sessionId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique;
    status: Schema.Attribute.String & Schema.Attribute.Private;
    type: Schema.Attribute.String & Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    userId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAboutUsPageAboutUsPage extends Struct.SingleTypeSchema {
  collectionName: 'about_us_pages';
  info: {
    displayName: 'About Us Page';
    pluralName: 'about-us-pages';
    singularName: 'about-us-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    countriesCount: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand: Schema.Attribute.Component<'ds.cta-band', false>;
    dataCentersCount: Schema.Attribute.String;
    dataCentersItems: Schema.Attribute.Text;
    dataCentersTitle: Schema.Attribute.String;
    foundedYear: Schema.Attribute.String;
    heroDescription: Schema.Attribute.Text;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    howStartedItems: Schema.Attribute.Text;
    howStartedTitle: Schema.Attribute.String;
    journeyTitle: Schema.Attribute.String;
    lifeDescription: Schema.Attribute.Text;
    lifeTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-us-page.about-us-page'
    > &
      Schema.Attribute.Private;
    missionText: Schema.Attribute.Text;
    missionTitle: Schema.Attribute.String;
    partnersCards: Schema.Attribute.Component<'ds.partner-logo', true>;
    partnersTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    servicesCount: Schema.Attribute.String;
    specializationsCards: Schema.Attribute.Component<'ds.icon-card', true>;
    specializationsTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    visionText: Schema.Attribute.Text;
    visionTitle: Schema.Attribute.String;
    whatWeDoCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whatWeDoTitle: Schema.Attribute.String;
    whereWeOperateItems: Schema.Attribute.Text;
    whereWeOperateTitle: Schema.Attribute.String;
    whoWeAreDescription: Schema.Attribute.Text;
    whoWeAreTitle: Schema.Attribute.String;
    whyChooseDescription: Schema.Attribute.Text;
    whyChooseTitle: Schema.Attribute.String;
  };
}

export interface ApiAcronisBackupPageAcronisBackupPage
  extends Struct.SingleTypeSchema {
  collectionName: 'acronis_backup_pages';
  info: {
    displayName: 'Acronis Backup Page';
    pluralName: 'acronis-backup-pages';
    singularName: 'acronis-backup-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutDescription: Schema.Attribute.Text;
    aboutFeatures: Schema.Attribute.Component<'ds.icon-card', true>;
    aboutPoints: Schema.Attribute.Component<'ds.icon-card', true>;
    aboutPointsTitle: Schema.Attribute.String;
    aboutTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqTitle: Schema.Attribute.String;
    features: Schema.Attribute.Component<'ds.icon-card', true>;
    featuresLabel: Schema.Attribute.String;
    featuresSubtitle: Schema.Attribute.Text;
    featuresTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroStats: Schema.Attribute.Component<'ds.perf-stat', true>;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::acronis-backup-page.acronis-backup-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    pricingCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    pricingCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    pricingLabel: Schema.Attribute.String;
    pricingMessage: Schema.Attribute.Text;
    pricingSubtitle: Schema.Attribute.Text;
    pricingTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyLabel: Schema.Attribute.String;
    whySubtitle: Schema.Attribute.Text;
    whyTitle: Schema.Attribute.String;
  };
}

export interface ApiAwsCloudHostingPageAwsCloudHostingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'aws_cloud_hosting_pages';
  info: {
    displayName: 'AWS Cloud Hosting Page';
    pluralName: 'aws-cloud-hosting-pages';
    singularName: 'aws-cloud-hosting-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutDescription: Schema.Attribute.Text;
    aboutImage: Schema.Attribute.Media<'images'>;
    aboutItems: Schema.Attribute.Component<'ds.when-card', true>;
    aboutLabel: Schema.Attribute.String;
    aboutTitle: Schema.Attribute.String;
    comparisonColumns: Schema.Attribute.JSON;
    comparisonLabel: Schema.Attribute.String;
    comparisonRows: Schema.Attribute.Component<'ds.comparison-row', true>;
    comparisonSubtitle: Schema.Attribute.Text;
    comparisonTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::aws-cloud-hosting-page.aws-cloud-hosting-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    services: Schema.Attribute.Component<'ds.icon-card', true>;
    servicesLabel: Schema.Attribute.String;
    servicesSubtitle: Schema.Attribute.Text;
    servicesTitle: Schema.Attribute.String;
    strengths: Schema.Attribute.Component<'ds.icon-card', true>;
    strengthsLabel: Schema.Attribute.String;
    strengthsSubtitle: Schema.Attribute.Text;
    strengthsTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAzureCloudHostingPageAzureCloudHostingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'azure_cloud_hosting_pages';
  info: {
    displayName: 'Azure Cloud Hosting Page';
    pluralName: 'azure-cloud-hosting-pages';
    singularName: 'azure-cloud-hosting-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutDescription: Schema.Attribute.Text;
    aboutImage: Schema.Attribute.Media<'images'>;
    aboutTitle: Schema.Attribute.String;
    advantages: Schema.Attribute.Component<'ds.icon-card', true>;
    advantagesLabel: Schema.Attribute.String;
    advantagesSubtitle: Schema.Attribute.Text;
    advantagesTitle: Schema.Attribute.String;
    comparisonColumns: Schema.Attribute.JSON;
    comparisonLabel: Schema.Attribute.String;
    comparisonRows: Schema.Attribute.Component<'ds.comparison-row', true>;
    comparisonSubtitle: Schema.Attribute.Text;
    comparisonTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    heroDescription: Schema.Attribute.Text;
    heroFormSubtitle: Schema.Attribute.String;
    heroFormTitle: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::azure-cloud-hosting-page.azure-cloud-hosting-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    pricingCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    pricingDescription: Schema.Attribute.Text;
    pricingTitle: Schema.Attribute.String;
    processLabel: Schema.Attribute.String;
    processSteps: Schema.Attribute.Component<'ds.when-card', true>;
    processSubtitle: Schema.Attribute.Text;
    processTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    securityDescription: Schema.Attribute.Text;
    securityFeatures: Schema.Attribute.Component<'ds.icon-card', true>;
    securityLabel: Schema.Attribute.String;
    securityTitle: Schema.Attribute.String;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    techBadges: Schema.Attribute.Component<'shared.tech-badge', true>;
    techLabel: Schema.Attribute.String;
    techSubtitle: Schema.Attribute.Text;
    techTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyLabel: Schema.Attribute.String;
    whySubtitle: Schema.Attribute.Text;
    whyTitle: Schema.Attribute.String;
  };
}

export interface ApiBareMetalServerPageBareMetalServerPage
  extends Struct.SingleTypeSchema {
  collectionName: 'bare_metal_server_pages';
  info: {
    displayName: 'Bare Metal Server Page';
    pluralName: 'bare-metal-server-pages';
    singularName: 'bare-metal-server-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    compareLabel: Schema.Attribute.String;
    compareTitle: Schema.Attribute.String;
    configsLabel: Schema.Attribute.String;
    configsSubtitle: Schema.Attribute.Text;
    configsTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqContactDesc: Schema.Attribute.Text;
    faqContactTitle: Schema.Attribute.String;
    faqTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroStatusSubtitle: Schema.Attribute.String;
    heroStatusTitle: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    heroTopBadge: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bare-metal-server-page.bare-metal-server-page'
    > &
      Schema.Attribute.Private;
    managedFeatures: Schema.Attribute.Component<'ds.icon-card', true>;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    serverConfigs: Schema.Attribute.Component<'ds.icon-card', true>;
    strategicCards: Schema.Attribute.Component<'ds.icon-card', true>;
    strategicLabel: Schema.Attribute.String;
    strategicTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whoCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whoLabel: Schema.Attribute.String;
    whoSubtitle: Schema.Attribute.Text;
    whoTitle: Schema.Attribute.String;
    whyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyLabel: Schema.Attribute.String;
    whySubtitle: Schema.Attribute.Text;
    whyTitle: Schema.Attribute.String;
  };
}

export interface ApiBuilderPageBuilderPage extends Struct.CollectionTypeSchema {
  collectionName: 'builder_pages';
  info: {
    description: 'Pages created with the visual page builder';
    displayName: 'Builder Page';
    pluralName: 'builder-pages';
    singularName: 'builder-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    currentVersion: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::builder-page.builder-page'
    > &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    publishedAt: Schema.Attribute.DateTime;
    publishedVersion: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    sections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<[]>;
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    templateId: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBuilderTemplateBuilderTemplate
  extends Struct.CollectionTypeSchema {
  collectionName: 'builder_templates';
  info: {
    description: 'Reusable starting templates for the page builder';
    displayName: 'Builder Template';
    pluralName: 'builder-templates';
    singularName: 'builder-template';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    category: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::builder-template.builder-template'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    sections: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<[]>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    thumbnailUrl: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiChatSessionChatSession extends Struct.CollectionTypeSchema {
  collectionName: 'chat_sessions';
  info: {
    description: 'Live chat sessions from the website chat widget';
    displayName: 'Chat Session';
    pluralName: 'chat-sessions';
    singularName: 'chat-session';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    budget: Schema.Attribute.String;
    company: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::chat-session.chat-session'
    > &
      Schema.Attribute.Private;
    messages: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    requirement: Schema.Attribute.Text;
    service: Schema.Attribute.String;
    sessionId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    status: Schema.Attribute.Enumeration<['bot', 'live', 'closed']> &
      Schema.Attribute.DefaultTo<'bot'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCloudHostingPageCloudHostingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'cloud_hosting_pages';
  info: {
    displayName: 'Cloud Hosting Page';
    pluralName: 'cloud-hosting-pages';
    singularName: 'cloud-hosting-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    choiceCards: Schema.Attribute.Component<'ds.icon-card', true>;
    choiceLabel: Schema.Attribute.String;
    choiceSubtitle: Schema.Attribute.Text;
    choiceTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand3: Schema.Attribute.Component<'ds.cta-band', false>;
    dashboardFeatures: Schema.Attribute.Component<'ds.icon-card', true>;
    dashboardImage: Schema.Attribute.String;
    dashboardLabel: Schema.Attribute.String;
    dashboardSubtitle: Schema.Attribute.Text;
    dashboardTitle: Schema.Attribute.String;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    frameworks: Schema.Attribute.Component<'shared.tech-badge', true>;
    frameworksLabel: Schema.Attribute.String;
    frameworksSubtitle: Schema.Attribute.Text;
    frameworksTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroPrice: Schema.Attribute.String;
    heroPriceNote: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::cloud-hosting-page.cloud-hosting-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    portalSteps: Schema.Attribute.Component<'ds.when-card', true>;
    powerFeatures: Schema.Attribute.Component<'ds.icon-card', true>;
    powerLabel: Schema.Attribute.String;
    powerSubtitle: Schema.Attribute.Text;
    powerTitle: Schema.Attribute.String;
    pricingLabel: Schema.Attribute.String;
    pricingPlans: Schema.Attribute.Component<'ds.pricing-plan', true>;
    pricingSubtitle: Schema.Attribute.Text;
    pricingTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    useCases: Schema.Attribute.Component<'ds.icon-card', true>;
    useCasesLabel: Schema.Attribute.String;
    useCasesSubtitle: Schema.Attribute.Text;
    useCasesTitle: Schema.Attribute.String;
    whyLabel: Schema.Attribute.String;
    whyReasons: Schema.Attribute.Component<'ds.when-card', true>;
    whySubtitle: Schema.Attribute.Text;
    whyTitle: Schema.Attribute.String;
    workloadFeatures: Schema.Attribute.Component<'ds.icon-card', true>;
    workloadsLabel: Schema.Attribute.String;
    workloadsSubtitle: Schema.Attribute.Text;
    workloadStats: Schema.Attribute.Component<'ds.perf-stat', true>;
    workloadsTitle: Schema.Attribute.String;
  };
}

export interface ApiCloudStoragePageCloudStoragePage
  extends Struct.SingleTypeSchema {
  collectionName: 'cloud_storage_pages';
  info: {
    displayName: 'Cloud Storage Page';
    pluralName: 'cloud-storage-pages';
    singularName: 'cloud-storage-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqContactDesc: Schema.Attribute.Text;
    faqContactTitle: Schema.Attribute.String;
    faqTitle: Schema.Attribute.String;
    features: Schema.Attribute.Component<'ds.icon-card', true>;
    featuresLabel: Schema.Attribute.String;
    featuresSubtitle: Schema.Attribute.Text;
    featuresTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroStatusSubtitle: Schema.Attribute.String;
    heroStatusTitle: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    heroTopBadge: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::cloud-storage-page.cloud-storage-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    plans: Schema.Attribute.Component<'ds.pricing-plan', true>;
    plansLabel: Schema.Attribute.String;
    plansSubtitle: Schema.Attribute.Text;
    plansTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whoCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whoLabel: Schema.Attribute.String;
    whoSubtitle: Schema.Attribute.Text;
    whoTitle: Schema.Attribute.String;
  };
}

export interface ApiContactSubmissionContactSubmission
  extends Struct.CollectionTypeSchema {
  collectionName: 'contact_submissions';
  info: {
    description: 'Enquiries submitted via the website contact form';
    displayName: 'Contact Submission';
    pluralName: 'contact-submissions';
    singularName: 'contact-submission';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    company: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact-submission.contact-submission'
    > &
      Schema.Attribute.Private;
    message: Schema.Attribute.Text & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    subject: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiContactUsPageContactUsPage extends Struct.SingleTypeSchema {
  collectionName: 'contact_us_pages';
  info: {
    displayName: 'Contact Us Page';
    pluralName: 'contact-us-pages';
    singularName: 'contact-us-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contactAddress: Schema.Attribute.Text;
    contactEmail: Schema.Attribute.Email;
    contactPhone: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaDescription: Schema.Attribute.Text;
    ctaTitle: Schema.Attribute.String;
    helpCards: Schema.Attribute.Component<'ds.icon-card', true>;
    helpDescription: Schema.Attribute.Text;
    helpTitle: Schema.Attribute.String;
    heroDescription: Schema.Attribute.Text;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact-us-page.contact-us-page'
    > &
      Schema.Attribute.Private;
    mapEmbedUrl: Schema.Attribute.Text;
    officeHours: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    steps: Schema.Attribute.Component<'ds.numbered-tip', true>;
    stepsDescription: Schema.Attribute.Text;
    stepsTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCpanelHostingPageCpanelHostingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'cpanel_hosting_pages';
  info: {
    description: 'Full-page content for the cPanel Hosting landing page';
    displayName: 'cPanel Hosting Page';
    pluralName: 'cpanel-hosting-pages';
    singularName: 'cpanel-hosting-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutCards: Schema.Attribute.Component<'ds.icon-card', true>;
    aboutDesc: Schema.Attribute.Text;
    aboutImage: Schema.Attribute.Component<'common.image', false>;
    aboutTitle: Schema.Attribute.String;
    builtinFeatures: Schema.Attribute.Component<'ds.icon-card', true>;
    builtinLabel: Schema.Attribute.String;
    builtinSubtitle: Schema.Attribute.Text;
    builtinTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqContactDesc: Schema.Attribute.Text;
    faqContactTitle: Schema.Attribute.String;
    faqTitle: Schema.Attribute.String;
    features: Schema.Attribute.Component<'ds.icon-card', true>;
    featuresLabel: Schema.Attribute.String;
    featuresSubtitle: Schema.Attribute.Text;
    featuresTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroStatusSubtitle: Schema.Attribute.String;
    heroStatusTitle: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String & Schema.Attribute.Required;
    heroTopBadge: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::cpanel-hosting-page.cpanel-hosting-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    plans: Schema.Attribute.Component<'ds.pricing-plan', true>;
    plansLabel: Schema.Attribute.String;
    plansSubtitle: Schema.Attribute.Text;
    plansTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    supportCards: Schema.Attribute.Component<'ds.icon-card', true>;
    supportDesc: Schema.Attribute.Text;
    supportImage: Schema.Attribute.Component<'common.image', false>;
    supportTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whenCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whenLabel: Schema.Attribute.String;
    whenSubtitle: Schema.Attribute.Text;
    whenTitle: Schema.Attribute.String;
    whoCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whoLabel: Schema.Attribute.String;
    whoSubtitle: Schema.Attribute.Text;
    whoTitle: Schema.Attribute.String;
    whyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyLabel: Schema.Attribute.String;
    whySubtitle: Schema.Attribute.Text;
    whyTitle: Schema.Attribute.String;
  };
}

export interface ApiDedicatedServerPageDedicatedServerPage
  extends Struct.SingleTypeSchema {
  collectionName: 'dedicated_server_pages';
  info: {
    displayName: 'Dedicated Server Page';
    pluralName: 'dedicated-server-pages';
    singularName: 'dedicated-server-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    comparisonColumns: Schema.Attribute.JSON;
    comparisonLabel: Schema.Attribute.String;
    comparisonRows: Schema.Attribute.Component<'ds.comparison-row', true>;
    comparisonSubtitle: Schema.Attribute.Text;
    comparisonTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqContactBtnLabel: Schema.Attribute.String;
    faqContactBtnUrl: Schema.Attribute.String;
    faqContactDescription: Schema.Attribute.Text;
    faqContactTitle: Schema.Attribute.String;
    faqTitle: Schema.Attribute.String;
    featureHighlights: Schema.Attribute.Component<'ds.icon-card', true>;
    footer: Schema.Attribute.Component<'ds.footer-section', false>;
    hero: Schema.Attribute.Component<'ds.hero-section', false>;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::dedicated-server-page.dedicated-server-page'
    > &
      Schema.Attribute.Private;
    locationPins: Schema.Attribute.Component<'ds.location-pin', true>;
    locationsDescription: Schema.Attribute.Text;
    locationsLabel: Schema.Attribute.String;
    locationsTitle: Schema.Attribute.String;
    locationTags: Schema.Attribute.Component<'ds.location-tag', true>;
    performanceChecklist: Schema.Attribute.Component<'ds.checklist-item', true>;
    performanceCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    performanceCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    performanceDescription: Schema.Attribute.Text;
    performanceLabel: Schema.Attribute.String;
    performanceStats: Schema.Attribute.Component<'ds.perf-stat', true>;
    performanceTitle: Schema.Attribute.String;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    pillarsLabel: Schema.Attribute.String;
    pillarsSubtitle: Schema.Attribute.Text;
    pillarsTitle: Schema.Attribute.String;
    pricingLabel: Schema.Attribute.String;
    pricingPlans: Schema.Attribute.Component<'ds.pricing-plan', true>;
    pricingSubtitle: Schema.Attribute.Text;
    pricingTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    securityCards: Schema.Attribute.Component<'ds.icon-card', true>;
    securityDescription: Schema.Attribute.Text;
    securityLabel: Schema.Attribute.String;
    securityTitle: Schema.Attribute.String;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    serviceButtons: Schema.Attribute.Component<'ds.service-button', true>;
    servicesDescription: Schema.Attribute.Text;
    servicesFooterText: Schema.Attribute.Text;
    servicesImage: Schema.Attribute.String;
    servicesImage2: Schema.Attribute.Component<'common.image', false>;
    servicesImageAlt: Schema.Attribute.String;
    servicesLabel: Schema.Attribute.String;
    servicesTitle: Schema.Attribute.String;
    shieldVisual: Schema.Attribute.Component<'ds.shield-visual', false>;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    useCaseCards: Schema.Attribute.Component<'ds.icon-card', true>;
    useCasesLabel: Schema.Attribute.String;
    useCasesSubtitle: Schema.Attribute.Text;
    useCasesTitle: Schema.Attribute.String;
    whenCards: Schema.Attribute.Component<'ds.when-card', true>;
    whenLabel: Schema.Attribute.String;
    whenSubtitle: Schema.Attribute.Text;
    whenTitle: Schema.Attribute.String;
  };
}

export interface ApiDomainRegistrationPageDomainRegistrationPage
  extends Struct.SingleTypeSchema {
  collectionName: 'domain_registration_pages';
  info: {
    displayName: 'Domain Registration Page';
    pluralName: 'domain-registration-pages';
    singularName: 'domain-registration-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqTitle: Schema.Attribute.String;
    features: Schema.Attribute.Component<'ds.icon-card', true>;
    featuresLabel: Schema.Attribute.String;
    featuresSubtitle: Schema.Attribute.Text;
    featuresTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::domain-registration-page.domain-registration-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    tips: Schema.Attribute.Component<'ds.icon-card', true>;
    tipsLabel: Schema.Attribute.String;
    tipsSubtitle: Schema.Attribute.Text;
    tipsTitle: Schema.Attribute.String;
    tldCards: Schema.Attribute.Component<'shared.tld-card', true>;
    tldLabel: Schema.Attribute.String;
    tldPills: Schema.Attribute.JSON;
    tldSubtitle: Schema.Attribute.Text;
    tldTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyLabel: Schema.Attribute.String;
    whySubtitle: Schema.Attribute.Text;
    whyTitle: Schema.Attribute.String;
  };
}

export interface ApiDomainTransferPageDomainTransferPage
  extends Struct.SingleTypeSchema {
  collectionName: 'domain_transfer_pages';
  info: {
    description: 'Full-page content for the Domain Transfer landing page';
    displayName: 'Domain Transfer Page';
    pluralName: 'domain-transfer-pages';
    singularName: 'domain-transfer-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    benefits: Schema.Attribute.Component<'ds.icon-card', true>;
    benefitsLabel: Schema.Attribute.String;
    benefitsSubtitle: Schema.Attribute.Text;
    benefitsTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqContactDesc: Schema.Attribute.Text;
    faqContactTitle: Schema.Attribute.String;
    faqTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u21C4 Domain Transfer'>;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroStatusSubtitle: Schema.Attribute.String;
    heroStatusTitle: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String & Schema.Attribute.Required;
    heroTopBadge: Schema.Attribute.String;
    highlightCards: Schema.Attribute.Component<'ds.highlight-card', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::domain-transfer-page.domain-transfer-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    publishedAt: Schema.Attribute.DateTime;
    relatedCards: Schema.Attribute.Component<'ds.related-card', true>;
    relatedLabel: Schema.Attribute.String;
    relatedTitle: Schema.Attribute.String;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    tips: Schema.Attribute.Component<'ds.numbered-tip', true>;
    tipsLabel: Schema.Attribute.String;
    tipsSubtitle: Schema.Attribute.Text;
    tipsTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whatYouGetCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whatYouGetLabel: Schema.Attribute.String;
    whatYouGetSubtitle: Schema.Attribute.Text;
    whatYouGetTitle: Schema.Attribute.String;
    whyRegisterCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyRegisterLabel: Schema.Attribute.String;
    whyRegisterSubtitle: Schema.Attribute.Text;
    whyRegisterTitle: Schema.Attribute.String;
    whySwitchCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whySwitchLabel: Schema.Attribute.String;
    whySwitchSubtitle: Schema.Attribute.Text;
    whySwitchTitle: Schema.Attribute.String;
  };
}

export interface ApiEmailHostingPageEmailHostingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'email_hosting_pages';
  info: {
    displayName: 'Email Hosting Page';
    pluralName: 'email-hosting-pages';
    singularName: 'email-hosting-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    features: Schema.Attribute.Component<'ds.icon-card', true>;
    featuresLabel: Schema.Attribute.String;
    featuresSubtitle: Schema.Attribute.Text;
    featuresTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::email-hosting-page.email-hosting-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    solutions: Schema.Attribute.Component<'shared.solution-card', true>;
    solutionsLabel: Schema.Attribute.String;
    solutionsSubtitle: Schema.Attribute.Text;
    solutionsTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    useCases: Schema.Attribute.Component<'ds.icon-card', true>;
    useCasesLabel: Schema.Attribute.String;
    useCasesSubtitle: Schema.Attribute.Text;
    useCasesTitle: Schema.Attribute.String;
  };
}

export interface ApiFirewallSecurityPageFirewallSecurityPage
  extends Struct.SingleTypeSchema {
  collectionName: 'firewall_security_pages';
  info: {
    displayName: 'Firewall Security Page';
    pluralName: 'firewall-security-pages';
    singularName: 'firewall-security-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    adaptsCards: Schema.Attribute.Component<'ds.icon-card', true>;
    adaptsLabel: Schema.Attribute.String;
    adaptsTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    envCards: Schema.Attribute.Component<'ds.icon-card', true>;
    envLabel: Schema.Attribute.String;
    envTitle: Schema.Attribute.String;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::firewall-security-page.firewall-security-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    servicesCards: Schema.Attribute.Component<'ds.icon-card', true>;
    servicesLabel: Schema.Attribute.String;
    servicesTitle: Schema.Attribute.String;
    strengthCards: Schema.Attribute.Component<'ds.icon-card', true>;
    strengthLabel: Schema.Attribute.String;
    strengthTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    threatDesc: Schema.Attribute.Text;
    threatTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    useCasesCards: Schema.Attribute.Component<'ds.icon-card', true>;
    useCasesLabel: Schema.Attribute.String;
    useCasesTitle: Schema.Attribute.String;
  };
}

export interface ApiFooterFooter extends Struct.SingleTypeSchema {
  collectionName: 'footers';
  info: {
    displayName: 'footer';
    pluralName: 'footers';
    singularName: 'footer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    commonFooter: Schema.Attribute.Component<'sections.footer', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::footer.footer'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiForexVpsPageForexVpsPage extends Struct.SingleTypeSchema {
  collectionName: 'forex_vps_pages';
  info: {
    displayName: 'Forex VPS Page';
    pluralName: 'forex-vps-pages';
    singularName: 'forex-vps-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqTitle: Schema.Attribute.String;
    features: Schema.Attribute.Component<'ds.icon-card', true>;
    featuresLabel: Schema.Attribute.String;
    featuresTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::forex-vps-page.forex-vps-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    plans: Schema.Attribute.Component<'ds.vps-plan', true>;
    plansLabel: Schema.Attribute.String;
    plansSubtitle: Schema.Attribute.Text;
    plansTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    setupSteps: Schema.Attribute.Component<'ds.numbered-tip', true>;
    setupStepsTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    tradingApps: Schema.Attribute.Component<'ds.icon-card', true>;
    tradingAppsTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    useCasesCards: Schema.Attribute.Component<'ds.icon-card', true>;
    useCasesLabel: Schema.Attribute.String;
    useCasesTitle: Schema.Attribute.String;
    whoCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whoLabel: Schema.Attribute.String;
    whoTitle: Schema.Attribute.String;
    whyChooseCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyChooseLabel: Schema.Attribute.String;
    whyChooseTitle: Schema.Attribute.String;
  };
}

export interface ApiGoogleCloudHostingPageGoogleCloudHostingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'google_cloud_hosting_pages';
  info: {
    description: 'Full-page content for the Google Cloud Hosting landing page';
    displayName: 'Google Cloud Hosting Page';
    pluralName: 'google-cloud-hosting-pages';
    singularName: 'google-cloud-hosting-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqContactDesc: Schema.Attribute.Text;
    faqContactTitle: Schema.Attribute.String;
    faqTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroStatusSubtitle: Schema.Attribute.String;
    heroStatusTitle: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String & Schema.Attribute.Required;
    heroTopBadge: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::google-cloud-hosting-page.google-cloud-hosting-page'
    > &
      Schema.Attribute.Private;
    migrationLabel: Schema.Attribute.String;
    migrationSteps: Schema.Attribute.Component<'ds.numbered-tip', true>;
    migrationSubtitle: Schema.Attribute.Text;
    migrationTitle: Schema.Attribute.String;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    plans: Schema.Attribute.Component<'ds.pricing-plan', true>;
    plansLabel: Schema.Attribute.String;
    plansSubtitle: Schema.Attribute.Text;
    plansTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    servicesCards: Schema.Attribute.Component<'ds.icon-card', true>;
    servicesLabel: Schema.Attribute.String;
    servicesSubtitle: Schema.Attribute.Text;
    servicesTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    useCases: Schema.Attribute.Component<'ds.icon-card', true>;
    useCasesLabel: Schema.Attribute.String;
    useCasesSubtitle: Schema.Attribute.Text;
    useCasesTitle: Schema.Attribute.String;
    whyGoogleCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyGoogleLabel: Schema.Attribute.String;
    whyGoogleSubtitle: Schema.Attribute.Text;
    whyGoogleTitle: Schema.Attribute.String;
  };
}

export interface ApiGoogleWorkspacePageGoogleWorkspacePage
  extends Struct.SingleTypeSchema {
  collectionName: 'google_workspace_pages';
  info: {
    description: 'Full-page content for the Google Workspace landing page';
    displayName: 'Google Workspace Page';
    pluralName: 'google-workspace-pages';
    singularName: 'google-workspace-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqContactDesc: Schema.Attribute.Text;
    faqContactTitle: Schema.Attribute.String;
    faqTitle: Schema.Attribute.String;
    features: Schema.Attribute.Component<'ds.icon-card', true>;
    featuresLabel: Schema.Attribute.String;
    featuresSubtitle: Schema.Attribute.Text;
    featuresTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u2601 Google Workspace'>;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroStatusSubtitle: Schema.Attribute.String;
    heroStatusTitle: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String & Schema.Attribute.Required;
    heroTopBadge: Schema.Attribute.String;
    howItWorksLabel: Schema.Attribute.String;
    howItWorksSubtitle: Schema.Attribute.Text;
    howItWorksTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::google-workspace-page.google-workspace-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    plans: Schema.Attribute.Component<'ds.pricing-plan', true>;
    plansLabel: Schema.Attribute.String;
    plansSubtitle: Schema.Attribute.Text;
    plansTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    steps: Schema.Attribute.Component<'ds.numbered-tip', true>;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyIcsdcLabel: Schema.Attribute.String;
    whyIcsdcSubtitle: Schema.Attribute.Text;
    whyIcsdcTitle: Schema.Attribute.String;
  };
}

export interface ApiGpuCloudHostingPageGpuCloudHostingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'gpu_cloud_hosting_pages';
  info: {
    displayName: 'GPU Cloud Hosting Page';
    pluralName: 'gpu-cloud-hosting-pages';
    singularName: 'gpu-cloud-hosting-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    builtinFeatures: Schema.Attribute.Component<'ds.icon-card', true>;
    builtinLabel: Schema.Attribute.String;
    builtinSubtitle: Schema.Attribute.Text;
    builtinTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqContactDesc: Schema.Attribute.Text;
    faqContactTitle: Schema.Attribute.String;
    faqTitle: Schema.Attribute.String;
    features: Schema.Attribute.Component<'ds.icon-card', true>;
    featuresLabel: Schema.Attribute.String;
    featuresSubtitle: Schema.Attribute.Text;
    featuresTitle: Schema.Attribute.String;
    gpuPortfolio: Schema.Attribute.Component<'ds.icon-card', true>;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroStatusSubtitle: Schema.Attribute.String;
    heroStatusTitle: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    heroTopBadge: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::gpu-cloud-hosting-page.gpu-cloud-hosting-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    plans: Schema.Attribute.Component<'ds.pricing-plan', true>;
    plansLabel: Schema.Attribute.String;
    plansSubtitle: Schema.Attribute.Text;
    plansTitle: Schema.Attribute.String;
    portfolioLabel: Schema.Attribute.String;
    portfolioSubtitle: Schema.Attribute.Text;
    portfolioTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyLabel: Schema.Attribute.String;
    whySubtitle: Schema.Attribute.Text;
    whyTitle: Schema.Attribute.String;
  };
}

export interface ApiGpuDedicatedServerPageGpuDedicatedServerPage
  extends Struct.SingleTypeSchema {
  collectionName: 'gpu_dedicated_server_pages';
  info: {
    displayName: 'GPU Dedicated Server Page';
    pluralName: 'gpu-dedicated-server-pages';
    singularName: 'gpu-dedicated-server-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqContactDesc: Schema.Attribute.Text;
    faqContactTitle: Schema.Attribute.String;
    faqTitle: Schema.Attribute.String;
    features: Schema.Attribute.Component<'ds.icon-card', true>;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroStatusSubtitle: Schema.Attribute.String;
    heroStatusTitle: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    heroTopBadge: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::gpu-dedicated-server-page.gpu-dedicated-server-page'
    > &
      Schema.Attribute.Private;
    models: Schema.Attribute.Component<'ds.icon-card', true>;
    modelsLabel: Schema.Attribute.String;
    modelsSubtitle: Schema.Attribute.Text;
    modelsTitle: Schema.Attribute.String;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    plans: Schema.Attribute.Component<'ds.pricing-plan', true>;
    plansLabel: Schema.Attribute.String;
    plansSubtitle: Schema.Attribute.Text;
    plansTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    techLabel: Schema.Attribute.String;
    techSubtitle: Schema.Attribute.Text;
    techTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    usecases: Schema.Attribute.Component<'ds.icon-card', true>;
    usecasesLabel: Schema.Attribute.String;
    usecasesSubtitle: Schema.Attribute.Text;
    usecasesTitle: Schema.Attribute.String;
    whyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyLabel: Schema.Attribute.String;
    whySubtitle: Schema.Attribute.Text;
    whyTitle: Schema.Attribute.String;
  };
}

export interface ApiHomePageHomePage extends Struct.SingleTypeSchema {
  collectionName: 'home_pages';
  info: {
    displayName: 'Home Page';
    pluralName: 'home-pages';
    singularName: 'home-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    BestCloudServices: Schema.Attribute.Component<'sections.who-we-are', false>;
    BeyondBestPracticeOurISOStandards: Schema.Attribute.Component<
      'sections.text-image',
      false
    >;
    CallToActionPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    callToActionSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    CloudSolutionsEngineered: Schema.Attribute.Component<
      'sections.cloud-solutions-engineered-section',
      true
    >;
    contactEmail: Schema.Attribute.String;
    contactEmailHours: Schema.Attribute.String;
    contactPhone: Schema.Attribute.String;
    contactPhoneHours: Schema.Attribute.String;
    contactSectionSubtitle: Schema.Attribute.Text;
    contactSectionTitle: Schema.Attribute.String;
    contactSubmitText: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    Footer: Schema.Attribute.Component<'sections.footer', false>;
    globalLocations: Schema.Attribute.Component<'ds.map-location', true>;
    globalPresenceSubtitle: Schema.Attribute.String;
    globalPresenceTitle: Schema.Attribute.String;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    IndustryLeadingExcellenceValidated: Schema.Attribute.Component<
      'sections.text-image',
      false
    >;
    LessCloudComplexity: Schema.Attribute.Component<
      'sections.text-image',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-page.home-page'
    > &
      Schema.Attribute.Private;
    mainHeading: Schema.Attribute.String;
    price: Schema.Attribute.String;
    priceNote: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    SEO: Schema.Attribute.Component<'ds.seo-meta', false>;
    subHeading: Schema.Attribute.String;
    techPartners: Schema.Attribute.Component<'ds.partner-logo', true>;
    techPartnersTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    trustedPartners: Schema.Attribute.Component<'ds.partner-logo', true>;
    trustedTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whoWeAre: Schema.Attribute.Component<'sections.who-we-are', false>;
    whyBusinessNeedsCloud: Schema.Attribute.Component<
      'sections.why-cloud-section',
      false
    >;
    whyChooseUs: Schema.Attribute.Component<'sections.why-us-card', true>;
  };
}

export interface ApiLinuxCloudHostingPageLinuxCloudHostingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'linux_cloud_hosting_pages';
  info: {
    description: 'Full-page content for the Linux Cloud Hosting landing page';
    displayName: 'Linux Cloud Hosting Page';
    pluralName: 'linux-cloud-hosting-pages';
    singularName: 'linux-cloud-hosting-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqContactDesc: Schema.Attribute.Text;
    faqContactTitle: Schema.Attribute.String;
    faqTitle: Schema.Attribute.String;
    frameworks: Schema.Attribute.Component<'shared.tech-badge', true>;
    frameworksLabel: Schema.Attribute.String;
    frameworksSubtitle: Schema.Attribute.Text;
    frameworksTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\uD83D\uDC27 Linux Cloud Hosting'>;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroStatusSubtitle: Schema.Attribute.String;
    heroStatusTitle: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String & Schema.Attribute.Required;
    heroTopBadge: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::linux-cloud-hosting-page.linux-cloud-hosting-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    plans: Schema.Attribute.Component<'ds.cloud-plan', true>;
    plansLabel: Schema.Attribute.String;
    plansSubtitle: Schema.Attribute.Text;
    plansTitle: Schema.Attribute.String;
    powerFeatures: Schema.Attribute.Component<'ds.icon-card', true>;
    powerLabel: Schema.Attribute.String;
    powerSubtitle: Schema.Attribute.Text;
    powerTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    useCases: Schema.Attribute.Component<'ds.icon-card', true>;
    useCasesLabel: Schema.Attribute.String;
    useCasesSubtitle: Schema.Attribute.Text;
    useCasesTitle: Schema.Attribute.String;
    whyLinuxCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyLinuxLabel: Schema.Attribute.String;
    whyLinuxSubtitle: Schema.Attribute.Text;
    whyLinuxTitle: Schema.Attribute.String;
    workloadFeatures: Schema.Attribute.Component<'ds.icon-card', true>;
    workloadsLabel: Schema.Attribute.String;
    workloadsSubtitle: Schema.Attribute.Text;
    workloadsTitle: Schema.Attribute.String;
  };
}

export interface ApiLinuxDedicatedServerPageLinuxDedicatedServerPage
  extends Struct.SingleTypeSchema {
  collectionName: 'linux_dedicated_server_pages';
  info: {
    displayName: 'Linux Dedicated Server Page';
    pluralName: 'linux-dedicated-server-pages';
    singularName: 'linux-dedicated-server-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    comparisonColumns: Schema.Attribute.JSON;
    comparisonLabel: Schema.Attribute.String;
    comparisonRows: Schema.Attribute.Component<'ds.comparison-row', true>;
    comparisonSubtitle: Schema.Attribute.Text;
    comparisonTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    innovationCards: Schema.Attribute.Component<'ds.icon-card', true>;
    innovationLabel: Schema.Attribute.String;
    innovationSubtitle: Schema.Attribute.Text;
    innovationTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::linux-dedicated-server-page.linux-dedicated-server-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    pricingLabel: Schema.Attribute.String;
    pricingPlans: Schema.Attribute.Component<'ds.pricing-plan', true>;
    pricingSubtitle: Schema.Attribute.Text;
    pricingTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    specsDescription: Schema.Attribute.Text;
    specsItems: Schema.Attribute.Component<'ds.checklist-item', true>;
    specsLabel: Schema.Attribute.String;
    specsTitle: Schema.Attribute.String;
    supportCards: Schema.Attribute.Component<'ds.icon-card', true>;
    supportLabel: Schema.Attribute.String;
    supportSubtitle: Schema.Attribute.Text;
    supportTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    useCases: Schema.Attribute.Component<'ds.icon-card', true>;
    useCasesLabel: Schema.Attribute.String;
    useCasesSubtitle: Schema.Attribute.Text;
    useCasesTitle: Schema.Attribute.String;
    whatDescription: Schema.Attribute.Text;
    whatImage: Schema.Attribute.Component<'common.image', false>;
    whatLabel: Schema.Attribute.String;
    whatTitle: Schema.Attribute.String;
    whyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyChooseDescription: Schema.Attribute.Text;
    whyChooseLabel: Schema.Attribute.String;
    whyChoosePoints: Schema.Attribute.JSON;
    whyChooseTitle: Schema.Attribute.String;
    whyLabel: Schema.Attribute.String;
    whySubtitle: Schema.Attribute.Text;
    whyTitle: Schema.Attribute.String;
  };
}

export interface ApiLinuxVpsHostingPageLinuxVpsHostingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'linux_vps_hosting_pages';
  info: {
    description: 'Full-page content for the Linux VPS Hosting landing page';
    displayName: 'Linux VPS Hosting Page';
    pluralName: 'linux-vps-hosting-pages';
    singularName: 'linux-vps-hosting-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutDesc: Schema.Attribute.Text;
    aboutImage: Schema.Attribute.Component<'common.image', false>;
    aboutTitle: Schema.Attribute.String;
    controlPanelLabel: Schema.Attribute.String;
    controlPanels: Schema.Attribute.Component<'ds.control-panel', true>;
    controlPanelSubtitle: Schema.Attribute.Text;
    controlPanelTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqContactDesc: Schema.Attribute.Text;
    faqContactTitle: Schema.Attribute.String;
    faqTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\uD83D\uDDA5 Linux VPS Hosting'>;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroStatusSubtitle: Schema.Attribute.String;
    heroStatusTitle: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String & Schema.Attribute.Required;
    heroTopBadge: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::linux-vps-hosting-page.linux-vps-hosting-page'
    > &
      Schema.Attribute.Private;
    osOptions: Schema.Attribute.Component<'ds.os-option', true>;
    osOptionsLabel: Schema.Attribute.String;
    osOptionsSubtitle: Schema.Attribute.Text;
    osOptionsTitle: Schema.Attribute.String;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    plans: Schema.Attribute.Component<'ds.vps-plan', true>;
    plansLabel: Schema.Attribute.String;
    plansSubtitle: Schema.Attribute.Text;
    plansTitle: Schema.Attribute.String;
    powerFeatures: Schema.Attribute.Component<'ds.icon-card', true>;
    powerLabel: Schema.Attribute.String;
    powerSubtitle: Schema.Attribute.Text;
    powerTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    useCases: Schema.Attribute.Component<'ds.icon-card', true>;
    useCasesLabel: Schema.Attribute.String;
    useCasesSubtitle: Schema.Attribute.Text;
    useCasesTitle: Schema.Attribute.String;
    whyChooseCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyChooseLabel: Schema.Attribute.String;
    whyChooseSubtitle: Schema.Attribute.Text;
    whyChooseTitle: Schema.Attribute.String;
    whyVpsCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyVpsLabel: Schema.Attribute.String;
    whyVpsSubtitle: Schema.Attribute.Text;
    whyVpsTitle: Schema.Attribute.String;
  };
}

export interface ApiManagedCloudHostingPageManagedCloudHostingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'managed_cloud_hosting_pages';
  info: {
    description: 'Full-page content for the Managed Cloud Hosting landing page';
    displayName: 'Managed Cloud Hosting Page';
    pluralName: 'managed-cloud-hosting-pages';
    singularName: 'managed-cloud-hosting-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqContactDesc: Schema.Attribute.Text;
    faqContactTitle: Schema.Attribute.String;
    faqTitle: Schema.Attribute.String;
    features: Schema.Attribute.Component<'ds.icon-card', true>;
    featuresLabel: Schema.Attribute.String;
    featuresSubtitle: Schema.Attribute.Text;
    featuresTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroStatusSubtitle: Schema.Attribute.String;
    heroStatusTitle: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String & Schema.Attribute.Required;
    heroTopBadge: Schema.Attribute.String;
    howItWorksLabel: Schema.Attribute.String;
    howItWorksSteps: Schema.Attribute.Component<'ds.numbered-tip', true>;
    howItWorksSubtitle: Schema.Attribute.Text;
    howItWorksTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::managed-cloud-hosting-page.managed-cloud-hosting-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    plans: Schema.Attribute.Component<'ds.pricing-plan', true>;
    plansLabel: Schema.Attribute.String;
    plansSubtitle: Schema.Attribute.Text;
    plansTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    servicesCards: Schema.Attribute.Component<'ds.icon-card', true>;
    servicesLabel: Schema.Attribute.String;
    servicesSubtitle: Schema.Attribute.Text;
    servicesTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    useCases: Schema.Attribute.Component<'ds.icon-card', true>;
    useCasesLabel: Schema.Attribute.String;
    useCasesSubtitle: Schema.Attribute.Text;
    useCasesTitle: Schema.Attribute.String;
    whyManagedCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyManagedLabel: Schema.Attribute.String;
    whyManagedSubtitle: Schema.Attribute.Text;
    whyManagedTitle: Schema.Attribute.String;
  };
}

export interface ApiManagedDedicatedServerPageManagedDedicatedServerPage
  extends Struct.SingleTypeSchema {
  collectionName: 'managed_dedicated_server_pages';
  info: {
    displayName: 'Managed Dedicated Server Page';
    pluralName: 'managed-dedicated-server-pages';
    singularName: 'managed-dedicated-server-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutDesc: Schema.Attribute.Text;
    aboutNote: Schema.Attribute.String;
    aboutTitle: Schema.Attribute.String;
    baremetalPromoCta: Schema.Attribute.Component<'ds.cta-link', false>;
    baremetalPromoDesc: Schema.Attribute.Text;
    baremetalPromoTitle: Schema.Attribute.String;
    cloudPromoCta: Schema.Attribute.Component<'ds.cta-link', false>;
    cloudPromoDesc: Schema.Attribute.Text;
    cloudPromoTitle: Schema.Attribute.String;
    compareRows: Schema.Attribute.Component<'ds.compare-row', true>;
    compareTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::managed-dedicated-server-page.managed-dedicated-server-page'
    > &
      Schema.Attribute.Private;
    osDesc: Schema.Attribute.Text;
    osTitle: Schema.Attribute.String;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    plansSubtitle: Schema.Attribute.String;
    plansTitle: Schema.Attribute.String;
    pricingPlans: Schema.Attribute.Component<'ds.pricing-plan', true>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    standoutCards: Schema.Attribute.Component<'ds.icon-card', true>;
    standoutLabel: Schema.Attribute.String;
    standoutTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whenDesc: Schema.Attribute.Text;
    whenList: Schema.Attribute.JSON;
    whenTitle: Schema.Attribute.String;
    whoCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whoLabel: Schema.Attribute.String;
    whoTitle: Schema.Attribute.String;
    whyChooseDesc: Schema.Attribute.Text;
    whyChooseList: Schema.Attribute.JSON;
    whyChooseTitle: Schema.Attribute.String;
  };
}

export interface ApiManagedVpsHostingPageManagedVpsHostingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'managed_vps_hosting_pages';
  info: {
    description: 'Full-page content for the Managed VPS Hosting landing page';
    displayName: 'Managed VPS Hosting Page';
    pluralName: 'managed-vps-hosting-pages';
    singularName: 'managed-vps-hosting-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutDesc: Schema.Attribute.Text;
    aboutImage: Schema.Attribute.Component<'common.image', false>;
    aboutTitle: Schema.Attribute.String;
    advantages: Schema.Attribute.Component<'ds.icon-card', true>;
    advantagesLabel: Schema.Attribute.String;
    advantagesTitle: Schema.Attribute.String;
    costComparison: Schema.Attribute.JSON;
    cpanelFeaturesDesc: Schema.Attribute.Text;
    cpanelFeaturesList: Schema.Attribute.JSON;
    cpanelFeaturesTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqContactDesc: Schema.Attribute.Text;
    faqContactTitle: Schema.Attribute.String;
    faqTitle: Schema.Attribute.String;
    features: Schema.Attribute.Component<'ds.icon-card', true>;
    featuresLabel: Schema.Attribute.String;
    featuresSubtitle: Schema.Attribute.Text;
    featuresTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroStatusSubtitle: Schema.Attribute.String;
    heroStatusTitle: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String & Schema.Attribute.Required;
    heroTopBadge: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::managed-vps-hosting-page.managed-vps-hosting-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    plans: Schema.Attribute.Component<'ds.pricing-plan', true>;
    plansLabel: Schema.Attribute.String;
    plansSubtitle: Schema.Attribute.Text;
    plansTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    selfManagedComparison: Schema.Attribute.JSON;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    useCaseCards: Schema.Attribute.Component<'ds.icon-card', true>;
    useCases: Schema.Attribute.Component<'ds.icon-card', true>;
    useCasesLabel: Schema.Attribute.String;
    useCasesSubtitle: Schema.Attribute.Text;
    useCasesTitle: Schema.Attribute.String;
    whatWeManage: Schema.Attribute.Component<'ds.icon-card', true>;
    whatWeManageLabel: Schema.Attribute.String;
    whatWeManageSubtitle: Schema.Attribute.Text;
    whatWeManageTitle: Schema.Attribute.String;
    whatYouGetCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whatYouGetLabel: Schema.Attribute.String;
    whatYouGetSubtitle: Schema.Attribute.Text;
    whatYouGetTitle: Schema.Attribute.String;
    whyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyLabel: Schema.Attribute.String;
    whyManagedCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyManagedLabel: Schema.Attribute.String;
    whyManagedSubtitle: Schema.Attribute.Text;
    whyManagedTitle: Schema.Attribute.String;
    whyTitle: Schema.Attribute.String;
  };
}

export interface ApiMicrosoft365PageMicrosoft365Page
  extends Struct.SingleTypeSchema {
  collectionName: 'microsoft_365_pages';
  info: {
    displayName: 'Microsoft 365 Page';
    pluralName: 'microsoft-365-pages';
    singularName: 'microsoft-365-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    backupFeatures: Schema.Attribute.Component<'ds.icon-card', true>;
    backupLabel: Schema.Attribute.String;
    backupSubtitle: Schema.Attribute.Text;
    backupTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqContactDesc: Schema.Attribute.Text;
    faqContactTitle: Schema.Attribute.String;
    faqTitle: Schema.Attribute.String;
    features: Schema.Attribute.Component<'ds.icon-card', true>;
    featuresLabel: Schema.Attribute.String;
    featuresSubtitle: Schema.Attribute.Text;
    featuresTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroStatusSubtitle: Schema.Attribute.String;
    heroStatusTitle: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    heroTopBadge: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::microsoft-365-page.microsoft-365-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    plans: Schema.Attribute.Component<'ds.pricing-plan', true>;
    plansLabel: Schema.Attribute.String;
    plansSubtitle: Schema.Attribute.Text;
    plansTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whoCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whoLabel: Schema.Attribute.String;
    whoSubtitle: Schema.Attribute.Text;
    whoTitle: Schema.Attribute.String;
  };
}

export interface ApiNavigationNavigation extends Struct.SingleTypeSchema {
  collectionName: 'navigations';
  info: {
    displayName: 'Navigation';
    pluralName: 'navigations';
    singularName: 'navigation';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaButton: Schema.Attribute.Component<'buttons.cta-button', false>;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::navigation.navigation'
    > &
      Schema.Attribute.Private;
    LoginButton: Schema.Attribute.Component<'buttons.button', false>;
    menus: Schema.Attribute.Component<'menu.nav-menu', true>;
    navLogo: Schema.Attribute.Component<'menu.main-logo', false>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whatsappWidget: Schema.Attribute.Component<
      'buttons.whatsapp-widget',
      false
    >;
  };
}

export interface ApiNvmeDedicatedServerPageNvmeDedicatedServerPage
  extends Struct.SingleTypeSchema {
  collectionName: 'nvme_dedicated_server_pages';
  info: {
    description: 'Full-page content for the NVMe Dedicated Servers landing page';
    displayName: 'NVMe Dedicated Server Page';
    pluralName: 'nvme-dedicated-server-pages';
    singularName: 'nvme-dedicated-server-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqContactDesc: Schema.Attribute.Text;
    faqContactTitle: Schema.Attribute.String;
    faqTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroStatusSubtitle: Schema.Attribute.String;
    heroStatusTitle: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String & Schema.Attribute.Required;
    heroTopBadge: Schema.Attribute.String;
    infraFeatures: Schema.Attribute.Component<'ds.icon-card', true>;
    infraLabel: Schema.Attribute.String;
    infraSubtitle: Schema.Attribute.Text;
    infraTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::nvme-dedicated-server-page.nvme-dedicated-server-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    plans: Schema.Attribute.Component<'ds.pricing-plan', true>;
    plansLabel: Schema.Attribute.String;
    plansSubtitle: Schema.Attribute.Text;
    plansTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    useCases: Schema.Attribute.Component<'ds.icon-card', true>;
    useCasesLabel: Schema.Attribute.String;
    useCasesSubtitle: Schema.Attribute.Text;
    useCasesTitle: Schema.Attribute.String;
    whenCards: Schema.Attribute.Component<'ds.numbered-tip', true>;
    whenLabel: Schema.Attribute.String;
    whenSubtitle: Schema.Attribute.Text;
    whenTitle: Schema.Attribute.String;
    whyNvmeCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyNvmeLabel: Schema.Attribute.String;
    whyNvmeSubtitle: Schema.Attribute.Text;
    whyNvmeTitle: Schema.Attribute.String;
  };
}

export interface ApiPageRegistryPageRegistry
  extends Struct.CollectionTypeSchema {
  collectionName: 'page_registries';
  info: {
    displayName: 'page-registry';
    pluralName: 'page-registries';
    singularName: 'page-registry';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    displayName: Schema.Attribute.String & Schema.Attribute.Required;
    isLive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::page-registry.page-registry'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPamMfaPagePamMfaPage extends Struct.SingleTypeSchema {
  collectionName: 'pam_mfa_pages';
  info: {
    displayName: 'PAM MFA Page';
    pluralName: 'pam-mfa-pages';
    singularName: 'pam-mfa-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    controlCards: Schema.Attribute.Component<'ds.icon-card', true>;
    controlLabel: Schema.Attribute.String;
    controlTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand3: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pam-mfa-page.pam-mfa-page'
    > &
      Schema.Attribute.Private;
    mattersDesc: Schema.Attribute.Text;
    mattersSteps: Schema.Attribute.Component<'ds.numbered-tip', true>;
    mattersTitle: Schema.Attribute.String;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    pricingDesc: Schema.Attribute.Text;
    pricingTitle: Schema.Attribute.String;
    processLabel: Schema.Attribute.String;
    processTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    steps: Schema.Attribute.Component<'ds.numbered-tip', true>;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyChooseCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyChooseLabel: Schema.Attribute.String;
    whyChooseTitle: Schema.Attribute.String;
    whyLabel: Schema.Attribute.String;
    whyTitle: Schema.Attribute.String;
  };
}

export interface ApiPricingPagePricingPage extends Struct.SingleTypeSchema {
  collectionName: 'pricing_pages';
  info: {
    description: 'Pricing page \u2014 hero, sections with tables, and CTA band';
    displayName: 'Pricing Page';
    pluralName: 'pricing-pages';
    singularName: 'pricing-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    billingAnnualLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Annual'>;
    billingMonthlyLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Monthly'>;
    billingSavePill: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand: Schema.Attribute.Component<'ds.cta-band', false>;
    heroBadges: Schema.Attribute.Component<'pricing.hero-badge', true>;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroSub: Schema.Attribute.Text;
    heroTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pricing-page.pricing-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sections: Schema.Attribute.Component<'pricing.pricing-section', true>;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    showBillingToggle: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiResellerHostingPageResellerHostingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'reseller_hosting_pages';
  info: {
    displayName: 'Reseller Hosting Page';
    pluralName: 'reseller-hosting-pages';
    singularName: 'reseller-hosting-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutDesc: Schema.Attribute.Text;
    aboutImage: Schema.Attribute.Component<'common.image', false>;
    aboutTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqContactDesc: Schema.Attribute.Text;
    faqContactTitle: Schema.Attribute.String;
    faqTitle: Schema.Attribute.String;
    features: Schema.Attribute.Component<'ds.icon-card', true>;
    featuresLabel: Schema.Attribute.String;
    featuresSubtitle: Schema.Attribute.Text;
    featuresTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroStatusSubtitle: Schema.Attribute.String;
    heroStatusTitle: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    heroTopBadge: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::reseller-hosting-page.reseller-hosting-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    plans: Schema.Attribute.Component<'ds.pricing-plan', true>;
    plansLabel: Schema.Attribute.String;
    plansSubtitle: Schema.Attribute.Text;
    plansTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    relatedCards: Schema.Attribute.Component<'ds.icon-card', true>;
    relatedLabel: Schema.Attribute.String;
    relatedSubtitle: Schema.Attribute.Text;
    relatedTitle: Schema.Attribute.String;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    supportCards: Schema.Attribute.Component<'ds.icon-card', true>;
    supportLabel: Schema.Attribute.String;
    supportSubtitle: Schema.Attribute.Text;
    supportTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    toolsCards: Schema.Attribute.Component<'ds.icon-card', true>;
    toolsLabel: Schema.Attribute.String;
    toolsSubtitle: Schema.Attribute.Text;
    toolsTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whatYouGetCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whatYouGetLabel: Schema.Attribute.String;
    whatYouGetSubtitle: Schema.Attribute.Text;
    whatYouGetTitle: Schema.Attribute.String;
    whyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyLabel: Schema.Attribute.String;
    whySubtitle: Schema.Attribute.Text;
    whyTitle: Schema.Attribute.String;
  };
}

export interface ApiSharedHostingPageSharedHostingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'shared_hosting_pages';
  info: {
    displayName: 'Shared Hosting Page';
    pluralName: 'shared-hosting-pages';
    singularName: 'shared-hosting-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutDescription: Schema.Attribute.Text;
    aboutImage: Schema.Attribute.Media<'images'>;
    aboutItems: Schema.Attribute.Component<'ds.when-card', true>;
    aboutLabel: Schema.Attribute.String;
    aboutTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    features: Schema.Attribute.Component<'ds.icon-card', true>;
    featuresLabel: Schema.Attribute.String;
    featuresSubtitle: Schema.Attribute.Text;
    featuresTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::shared-hosting-page.shared-hosting-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    techCards: Schema.Attribute.Component<'ds.icon-card', true>;
    techLabel: Schema.Attribute.String;
    techSubtitle: Schema.Attribute.Text;
    techTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whenUseCards: Schema.Attribute.Component<'ds.when-card', true>;
    whenUsePerfectFor: Schema.Attribute.String;
    whenUseTitle: Schema.Attribute.String;
    whyLabel: Schema.Attribute.String;
    whyReasons: Schema.Attribute.Component<'ds.when-card', true>;
    whySubtitle: Schema.Attribute.Text;
    whyTitle: Schema.Attribute.String;
  };
}

export interface ApiSslCertificatePageSslCertificatePage
  extends Struct.SingleTypeSchema {
  collectionName: 'ssl_certificate_pages';
  info: {
    displayName: 'SSL Certificate Page';
    pluralName: 'ssl-certificate-pages';
    singularName: 'ssl-certificate-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ssl-certificate-page.ssl-certificate-page'
    > &
      Schema.Attribute.Private;
    offersCards: Schema.Attribute.Component<'ds.icon-card', true>;
    offersLabel: Schema.Attribute.String;
    offersTitle: Schema.Attribute.String;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    powerCards: Schema.Attribute.Component<'ds.icon-card', true>;
    powerLabel: Schema.Attribute.String;
    powerTitle: Schema.Attribute.String;
    pricingDesc: Schema.Attribute.Text;
    pricingTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    sslTypes: Schema.Attribute.Component<'ds.ssl-type', true>;
    sslTypesSubtitle: Schema.Attribute.String;
    sslTypesTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    typesGlanceCards: Schema.Attribute.Component<'ds.icon-card', true>;
    typesGlanceTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyDesc: Schema.Attribute.Text;
    whyLabel: Schema.Attribute.String;
    whyTitle: Schema.Attribute.String;
  };
}

export interface ApiTallyOnCloudPageTallyOnCloudPage
  extends Struct.SingleTypeSchema {
  collectionName: 'tally_on_cloud_pages';
  info: {
    displayName: 'Tally on Cloud Page';
    pluralName: 'tally-on-cloud-pages';
    singularName: 'tally-on-cloud-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutDesc: Schema.Attribute.Text;
    aboutTitle: Schema.Attribute.String;
    compareLabel: Schema.Attribute.String;
    compareRows: Schema.Attribute.Component<'ds.icon-card', true>;
    compareTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    improvements: Schema.Attribute.Component<'ds.icon-card', true>;
    improvementsLabel: Schema.Attribute.String;
    improvementsTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::tally-on-cloud-page.tally-on-cloud-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whoCanCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whoCanDesc: Schema.Attribute.Text;
    whoCanLabel: Schema.Attribute.String;
    whoCanTitle: Schema.Attribute.String;
    whyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyLabel: Schema.Attribute.String;
    whyTitle: Schema.Attribute.String;
  };
}

export interface ApiVaptPageVaptPage extends Struct.SingleTypeSchema {
  collectionName: 'vapt_pages';
  info: {
    displayName: 'VAPT Page';
    pluralName: 'vapt-pages';
    singularName: 'vapt-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::vapt-page.vapt-page'
    > &
      Schema.Attribute.Private;
    offeringsCards: Schema.Attribute.Component<'ds.icon-card', true>;
    offeringsLabel: Schema.Attribute.String;
    offeringsTitle: Schema.Attribute.String;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    processLabel: Schema.Attribute.String;
    processTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    steps: Schema.Attribute.Component<'ds.numbered-tip', true>;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whatDesc: Schema.Attribute.Text;
    whatTitle: Schema.Attribute.String;
    whyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyChooseCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyChooseLabel: Schema.Attribute.String;
    whyChooseTitle: Schema.Attribute.String;
    whyLabel: Schema.Attribute.String;
    whyTitle: Schema.Attribute.String;
  };
}

export interface ApiVeeamBackupPageVeeamBackupPage
  extends Struct.SingleTypeSchema {
  collectionName: 'veeam_backup_pages';
  info: {
    displayName: 'Veeam Backup Page';
    pluralName: 'veeam-backup-pages';
    singularName: 'veeam-backup-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    compareLabel: Schema.Attribute.String;
    compareRows: Schema.Attribute.Component<'ds.icon-card', true>;
    compareTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqContactDesc: Schema.Attribute.Text;
    faqContactTitle: Schema.Attribute.String;
    faqTitle: Schema.Attribute.String;
    features: Schema.Attribute.Component<'ds.icon-card', true>;
    featuresLabel: Schema.Attribute.String;
    featuresSubtitle: Schema.Attribute.Text;
    featuresTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroStatusSubtitle: Schema.Attribute.String;
    heroStatusTitle: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    heroTopBadge: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::veeam-backup-page.veeam-backup-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    stats: Schema.Attribute.Component<'ds.icon-card', true>;
    statsLabel: Schema.Attribute.String;
    statsSubtitle: Schema.Attribute.Text;
    statsTitle: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'ds.numbered-tip', true>;
    stepsLabel: Schema.Attribute.String;
    stepsTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whoCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whoLabel: Schema.Attribute.String;
    whoSubtitle: Schema.Attribute.Text;
    whoTitle: Schema.Attribute.String;
    whyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyLabel: Schema.Attribute.String;
    whySubtitle: Schema.Attribute.Text;
    whyTitle: Schema.Attribute.String;
  };
}

export interface ApiVirtualMachinePageVirtualMachinePage
  extends Struct.SingleTypeSchema {
  collectionName: 'virtual_machine_pages';
  info: {
    displayName: 'Virtual Machine Page';
    pluralName: 'virtual-machine-pages';
    singularName: 'virtual-machine-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blockStorageDescription: Schema.Attribute.Text;
    blockStorageSubtitle: Schema.Attribute.Text;
    blockStorageTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqContactDesc: Schema.Attribute.Text;
    faqContactTitle: Schema.Attribute.String;
    faqTitle: Schema.Attribute.String;
    features: Schema.Attribute.Component<'ds.icon-card', true>;
    featuresLabel: Schema.Attribute.String;
    featuresSubtitle: Schema.Attribute.Text;
    featuresTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroStatusSubtitle: Schema.Attribute.String;
    heroStatusTitle: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    heroTopBadge: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::virtual-machine-page.virtual-machine-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    plansLabel: Schema.Attribute.String;
    plansSubtitle: Schema.Attribute.Text;
    plansTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    useCases: Schema.Attribute.Component<'ds.icon-card', true>;
    useCasesLabel: Schema.Attribute.String;
    useCasesSubtitle: Schema.Attribute.Text;
    useCasesTitle: Schema.Attribute.String;
    vmPlans: Schema.Attribute.Component<'ds.icon-card', true>;
    whenCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whenLabel: Schema.Attribute.String;
    whenSubtitle: Schema.Attribute.Text;
    whenTitle: Schema.Attribute.String;
    whyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyLabel: Schema.Attribute.String;
    whySubtitle: Schema.Attribute.Text;
    whyTitle: Schema.Attribute.String;
  };
}

export interface ApiVpsCpanelPageVpsCpanelPage extends Struct.SingleTypeSchema {
  collectionName: 'vps_cpanel_pages';
  info: {
    displayName: 'VPS cPanel Hosting Page';
    pluralName: 'vps-cpanel-pages';
    singularName: 'vps-cpanel-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutDesc: Schema.Attribute.Text;
    aboutImage: Schema.Attribute.Component<'common.image', false>;
    aboutTitle: Schema.Attribute.String;
    advantages: Schema.Attribute.Component<'ds.icon-card', true>;
    advantagesLabel: Schema.Attribute.String;
    advantagesTitle: Schema.Attribute.String;
    costComparison: Schema.Attribute.JSON;
    cpanelFeaturesDesc: Schema.Attribute.Text;
    cpanelFeaturesList: Schema.Attribute.JSON;
    cpanelFeaturesTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::vps-cpanel-page.vps-cpanel-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    plans: Schema.Attribute.Component<'ds.pricing-plan', true>;
    plansLabel: Schema.Attribute.String;
    plansSubtitle: Schema.Attribute.Text;
    plansTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    selfManagedComparison: Schema.Attribute.JSON;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    useCaseCards: Schema.Attribute.Component<'ds.icon-card', true>;
    useCasesLabel: Schema.Attribute.String;
    useCasesSubtitle: Schema.Attribute.Text;
    useCasesTitle: Schema.Attribute.String;
    whatYouGetCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whatYouGetLabel: Schema.Attribute.String;
    whatYouGetSubtitle: Schema.Attribute.Text;
    whatYouGetTitle: Schema.Attribute.String;
    whyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyLabel: Schema.Attribute.String;
    whyTitle: Schema.Attribute.String;
  };
}

export interface ApiVpsHostingPageVpsHostingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'vps_hosting_pages';
  info: {
    displayName: 'VPS Hosting Page';
    pluralName: 'vps-hosting-pages';
    singularName: 'vps-hosting-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    controlPanels: Schema.Attribute.Component<'shared.tech-badge', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    diffCards: Schema.Attribute.Component<'ds.icon-card', true>;
    diffLabel: Schema.Attribute.String;
    diffSubtitle: Schema.Attribute.Text;
    diffTitle: Schema.Attribute.String;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqTitle: Schema.Attribute.String;
    globalCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    globalCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    globalDescription: Schema.Attribute.Text;
    globalLabel: Schema.Attribute.String;
    globalTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroPrice: Schema.Attribute.String;
    heroPriceNote: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    infraCards: Schema.Attribute.Component<'ds.icon-card', true>;
    infraLabel: Schema.Attribute.String;
    infraSubtitle: Schema.Attribute.Text;
    infraTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::vps-hosting-page.vps-hosting-page'
    > &
      Schema.Attribute.Private;
    locations: Schema.Attribute.Component<'shared.location-card', true>;
    mgmtCards: Schema.Attribute.Component<'ds.icon-card', true>;
    mgmtLabel: Schema.Attribute.String;
    mgmtSubtitle: Schema.Attribute.Text;
    mgmtTitle: Schema.Attribute.String;
    panelsImage: Schema.Attribute.Component<'common.image', false>;
    panelsLabel: Schema.Attribute.String;
    panelsSubtitle: Schema.Attribute.Text;
    panelsTitle: Schema.Attribute.String;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    pricingLabel: Schema.Attribute.String;
    pricingPlans: Schema.Attribute.Component<'ds.pricing-plan', true>;
    pricingSubtitle: Schema.Attribute.Text;
    pricingTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    speedFeatures: Schema.Attribute.Component<'ds.icon-card', true>;
    speedLabel: Schema.Attribute.String;
    speedStats: Schema.Attribute.Component<'ds.perf-stat', true>;
    speedTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    useCases: Schema.Attribute.Component<'ds.icon-card', true>;
    useCasesLabel: Schema.Attribute.String;
    useCasesSubtitle: Schema.Attribute.Text;
    useCasesTitle: Schema.Attribute.String;
    vpsTypes: Schema.Attribute.Component<'ds.icon-card', true>;
  };
}

export interface ApiVpsHostingTrialPageVpsHostingTrialPage
  extends Struct.SingleTypeSchema {
  collectionName: 'vps_hosting_trial_pages';
  info: {
    displayName: 'VPS Hosting Trial Page';
    pluralName: 'vps-hosting-trial-pages';
    singularName: 'vps-hosting-trial-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqContactDesc: Schema.Attribute.Text;
    faqContactTitle: Schema.Attribute.String;
    faqTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroStatusSubtitle: Schema.Attribute.String;
    heroStatusTitle: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    heroTopBadge: Schema.Attribute.String;
    howLabel: Schema.Attribute.String;
    howSteps: Schema.Attribute.Component<'ds.numbered-tip', true>;
    howSubtitle: Schema.Attribute.Text;
    howTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::vps-hosting-trial-page.vps-hosting-trial-page'
    > &
      Schema.Attribute.Private;
    moreServicesCards: Schema.Attribute.Component<'ds.icon-card', true>;
    moreServicesSubtitle: Schema.Attribute.Text;
    moreServicesTitle: Schema.Attribute.String;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    plans: Schema.Attribute.Component<'ds.pricing-plan', true>;
    plansLabel: Schema.Attribute.String;
    plansSubtitle: Schema.Attribute.Text;
    plansTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    specs: Schema.Attribute.Component<'ds.icon-card', true>;
    specsLabel: Schema.Attribute.String;
    specsSubtitle: Schema.Attribute.Text;
    specsTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whenCards: Schema.Attribute.Component<'ds.numbered-tip', true>;
    whenLabel: Schema.Attribute.String;
    whenSubtitle: Schema.Attribute.Text;
    whenTitle: Schema.Attribute.String;
    whoCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whoLabel: Schema.Attribute.String;
    whoSubtitle: Schema.Attribute.Text;
    whoTitle: Schema.Attribute.String;
    whyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyLabel: Schema.Attribute.String;
    whySubtitle: Schema.Attribute.Text;
    whyTitle: Schema.Attribute.String;
  };
}

export interface ApiWebHostingPageWebHostingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'web_hosting_pages';
  info: {
    displayName: 'Web Hosting Page';
    pluralName: 'web-hosting-pages';
    singularName: 'web-hosting-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    backupPromoCta: Schema.Attribute.Component<'ds.cta-link', false>;
    backupPromoDesc: Schema.Attribute.Text;
    backupPromoTitle: Schema.Attribute.String;
    compareRows: Schema.Attribute.Component<'ds.icon-card', true>;
    compareRows2: Schema.Attribute.Component<'ds.icon-card', true>;
    compareTitle: Schema.Attribute.String;
    compareTitle2: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqTitle: Schema.Attribute.String;
    featuresCards: Schema.Attribute.Component<'ds.icon-card', true>;
    featuresLabel: Schema.Attribute.String;
    featuresTitle: Schema.Attribute.String;
    helpCards: Schema.Attribute.Component<'ds.icon-card', true>;
    helpDesc: Schema.Attribute.Text;
    helpTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::web-hosting-page.web-hosting-page'
    > &
      Schema.Attribute.Private;
    pamPromoCta: Schema.Attribute.Component<'ds.cta-link', false>;
    pamPromoDesc: Schema.Attribute.Text;
    pamPromoTitle: Schema.Attribute.String;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    plansSubtitle: Schema.Attribute.Text;
    plansTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    safetyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    safetyDesc: Schema.Attribute.Text;
    safetyTitle: Schema.Attribute.String;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    succeedCards: Schema.Attribute.Component<'ds.icon-card', true>;
    succeedTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyLabel: Schema.Attribute.String;
    whyTitle: Schema.Attribute.String;
  };
}

export interface ApiWhatsappLeadWhatsappLead
  extends Struct.CollectionTypeSchema {
  collectionName: 'whatsapp_leads';
  info: {
    description: 'Phone numbers captured by the floating WhatsApp widget before handoff to WhatsApp';
    displayName: 'WhatsApp Lead';
    pluralName: 'whatsapp-leads';
    singularName: 'whatsapp-lead';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::whatsapp-lead.whatsapp-lead'
    > &
      Schema.Attribute.Private;
    message: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    sourceUrl: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<['new', 'contacted', 'closed']> &
      Schema.Attribute.DefaultTo<'new'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    userAgent: Schema.Attribute.String;
  };
}

export interface ApiWhyUsSectionWhyUsSection extends Struct.SingleTypeSchema {
  collectionName: 'why_us_sections';
  info: {
    displayName: 'Why Us Section';
    pluralName: 'why-us-sections';
    singularName: 'why-us-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.why-us-card', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::why-us-section.why-us-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiWindowsCloudHostingPageWindowsCloudHostingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'windows_cloud_hosting_pages';
  info: {
    displayName: 'Windows Cloud Hosting Page';
    pluralName: 'windows-cloud-hosting-pages';
    singularName: 'windows-cloud-hosting-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    appCards: Schema.Attribute.Component<'ds.icon-card', true>;
    appsLabel: Schema.Attribute.String;
    appsSubtitle: Schema.Attribute.Text;
    appsTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    features: Schema.Attribute.Component<'ds.icon-card', true>;
    featuresLabel: Schema.Attribute.String;
    featuresSubtitle: Schema.Attribute.Text;
    featuresTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::windows-cloud-hosting-page.windows-cloud-hosting-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    useCaseItems: Schema.Attribute.Component<'ds.icon-card', true>;
    useCasesLabel: Schema.Attribute.String;
    useCasesSubtitle: Schema.Attribute.Text;
    useCasesTitle: Schema.Attribute.String;
    whyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyLabel: Schema.Attribute.String;
    whySubtitle: Schema.Attribute.Text;
    whyTitle: Schema.Attribute.String;
  };
}

export interface ApiWindowsDedicatedServerPageWindowsDedicatedServerPage
  extends Struct.SingleTypeSchema {
  collectionName: 'windows_dedicated_server_pages';
  info: {
    displayName: 'Windows Dedicated Server Page';
    pluralName: 'windows-dedicated-server-pages';
    singularName: 'windows-dedicated-server-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutDescription: Schema.Attribute.Text;
    aboutItems: Schema.Attribute.Component<'ds.checklist-item', true>;
    aboutLabel: Schema.Attribute.String;
    aboutTitle: Schema.Attribute.String;
    comparisonColumns: Schema.Attribute.JSON;
    comparisonLabel: Schema.Attribute.String;
    comparisonRows: Schema.Attribute.Component<'ds.comparison-row', true>;
    comparisonSubtitle: Schema.Attribute.Text;
    comparisonTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    features: Schema.Attribute.Component<'ds.icon-card', true>;
    featuresLabel: Schema.Attribute.String;
    featuresSubtitle: Schema.Attribute.Text;
    featuresTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::windows-dedicated-server-page.windows-dedicated-server-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    pricingCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    pricingCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    pricingDescription: Schema.Attribute.Text;
    pricingLabel: Schema.Attribute.String;
    pricingTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    readyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    readyLabel: Schema.Attribute.String;
    readySubtitle: Schema.Attribute.Text;
    readyTitle: Schema.Attribute.String;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    useCases: Schema.Attribute.Component<'ds.icon-card', true>;
    useCasesLabel: Schema.Attribute.String;
    useCasesSubtitle: Schema.Attribute.Text;
    useCasesTitle: Schema.Attribute.String;
    whyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyLabel: Schema.Attribute.String;
    whySubtitle: Schema.Attribute.Text;
    whyTitle: Schema.Attribute.String;
  };
}

export interface ApiWindowsVpsHostingPageWindowsVpsHostingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'windows_vps_hosting_pages';
  info: {
    displayName: 'Windows VPS Hosting Page';
    pluralName: 'windows-vps-hosting-pages';
    singularName: 'windows-vps-hosting-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutDesc: Schema.Attribute.Text;
    aboutImage: Schema.Attribute.Component<'common.image', false>;
    aboutPoints: Schema.Attribute.JSON;
    aboutTitle: Schema.Attribute.String;
    aboutWhyTitle: Schema.Attribute.String;
    advancedCards: Schema.Attribute.Component<'ds.icon-card', true>;
    advancedLabel: Schema.Attribute.String;
    advancedSubtitle: Schema.Attribute.Text;
    advancedTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqTitle: Schema.Attribute.String;
    features: Schema.Attribute.Component<'ds.icon-card', true>;
    featuresLabel: Schema.Attribute.String;
    featuresSubtitle: Schema.Attribute.Text;
    featuresTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::windows-vps-hosting-page.windows-vps-hosting-page'
    > &
      Schema.Attribute.Private;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    plans: Schema.Attribute.Component<'ds.vps-plan', true>;
    plansLabel: Schema.Attribute.String;
    plansSubtitle: Schema.Attribute.Text;
    plansTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    securityCards: Schema.Attribute.Component<'ds.icon-card', true>;
    securityLabel: Schema.Attribute.String;
    securitySubtitle: Schema.Attribute.Text;
    securityTitle: Schema.Attribute.String;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    techLabel: Schema.Attribute.String;
    techStacks: Schema.Attribute.JSON;
    techSubtitle: Schema.Attribute.Text;
    techTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    useCases: Schema.Attribute.Component<'ds.icon-card', true>;
    useCasesLabel: Schema.Attribute.String;
    useCasesSubtitle: Schema.Attribute.Text;
    useCasesTitle: Schema.Attribute.String;
    whyChooseCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyChooseLabel: Schema.Attribute.String;
    whyChooseSubtitle: Schema.Attribute.Text;
    whyChooseTitle: Schema.Attribute.String;
  };
}

export interface ApiWordpressHostingPageWordpressHostingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'wordpress_hosting_pages';
  info: {
    description: 'Full-page content for the WordPress Hosting landing page';
    displayName: 'WordPress Hosting Page';
    pluralName: 'wordpress-hosting-pages';
    singularName: 'wordpress-hosting-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutDesc: Schema.Attribute.Text;
    aboutImage: Schema.Attribute.Component<'common.image', false>;
    aboutTitle: Schema.Attribute.String;
    controlCards: Schema.Attribute.Component<'ds.icon-card', true>;
    controlDesc: Schema.Attribute.Text;
    controlImage: Schema.Attribute.Component<'common.image', false>;
    controlTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqContactDesc: Schema.Attribute.Text;
    faqContactTitle: Schema.Attribute.String;
    faqTitle: Schema.Attribute.String;
    fastDesc: Schema.Attribute.Text;
    fastImage: Schema.Attribute.Component<'common.image', false>;
    fastTitle: Schema.Attribute.String;
    features: Schema.Attribute.Component<'ds.icon-card', true>;
    featuresLabel: Schema.Attribute.String;
    featuresSubtitle: Schema.Attribute.Text;
    featuresTitle: Schema.Attribute.String;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u26A1 WordPress Hosting'>;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroStatusSubtitle: Schema.Attribute.String;
    heroStatusTitle: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String & Schema.Attribute.Required;
    heroTopBadge: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::wordpress-hosting-page.wordpress-hosting-page'
    > &
      Schema.Attribute.Private;
    managedFeatures: Schema.Attribute.Component<'ds.icon-card', true>;
    managedLabel: Schema.Attribute.String;
    managedSubtitle: Schema.Attribute.Text;
    managedTitle: Schema.Attribute.String;
    packedCards: Schema.Attribute.Component<'ds.icon-card', true>;
    packedLabel: Schema.Attribute.String;
    packedSubtitle: Schema.Attribute.Text;
    packedTitle: Schema.Attribute.String;
    performanceCards: Schema.Attribute.Component<'ds.icon-card', true>;
    performanceLabel: Schema.Attribute.String;
    performanceSubtitle: Schema.Attribute.Text;
    performanceTitle: Schema.Attribute.String;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    plans: Schema.Attribute.Component<'ds.pricing-plan', true>;
    plansLabel: Schema.Attribute.String;
    plansSubtitle: Schema.Attribute.Text;
    plansTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    relatedCards: Schema.Attribute.Component<'ds.icon-card', true>;
    relatedLabel: Schema.Attribute.String;
    relatedSubtitle: Schema.Attribute.Text;
    relatedTitle: Schema.Attribute.String;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whyChooseCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyChooseLabel: Schema.Attribute.String;
    whyChooseSubtitle: Schema.Attribute.Text;
    whyChooseTitle: Schema.Attribute.String;
    whyConsiderCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyConsiderLabel: Schema.Attribute.String;
    whyConsiderSubtitle: Schema.Attribute.Text;
    whyConsiderTitle: Schema.Attribute.String;
  };
}

export interface ApiZimbraHostingPageZimbraHostingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'zimbra_hosting_pages';
  info: {
    description: 'Full-page content for the Zimbra Hosting landing page';
    displayName: 'Zimbra Hosting Page';
    pluralName: 'zimbra-hosting-pages';
    singularName: 'zimbra-hosting-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    comparisonColumns: Schema.Attribute.JSON;
    comparisonLabel: Schema.Attribute.String;
    comparisonRows: Schema.Attribute.Component<'zm.comparison-row', true>;
    comparisonSubtitle: Schema.Attribute.Text;
    comparisonTitle: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBand1: Schema.Attribute.Component<'ds.cta-band', false>;
    ctaBand2: Schema.Attribute.Component<'ds.cta-band', false>;
    faq: Schema.Attribute.Component<'ds.faq-entry', true>;
    faqContactBtnLabel: Schema.Attribute.String;
    faqContactBtnUrl: Schema.Attribute.String;
    faqContactDescription: Schema.Attribute.Text;
    faqContactTitle: Schema.Attribute.String;
    faqTitle: Schema.Attribute.String;
    featureBadges: Schema.Attribute.Component<'zm.feature-badge', true>;
    featuresLabel: Schema.Attribute.String;
    featuresSubtitle: Schema.Attribute.Text;
    featuresTitle: Schema.Attribute.String;
    footer: Schema.Attribute.Component<'ds.footer-section', false>;
    heroCtaPrimary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroCtaSecondary: Schema.Attribute.Component<'ds.cta-link', false>;
    heroDescription: Schema.Attribute.Text;
    heroEyebrow: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Zimbra Email Hosting'>;
    heroImage: Schema.Attribute.Component<'common.image', false>;
    heroStatusSubtitle: Schema.Attribute.String;
    heroStatusTitle: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String & Schema.Attribute.Required;
    heroTopBadge: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::zimbra-hosting-page.zimbra-hosting-page'
    > &
      Schema.Attribute.Private;
    migrationLabel: Schema.Attribute.String;
    migrationSteps: Schema.Attribute.Component<'zm.migration-step', true>;
    migrationSubtitle: Schema.Attribute.Text;
    migrationTitle: Schema.Attribute.String;
    pillars: Schema.Attribute.Component<'ds.icon-card', true>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'ds.seo-meta', false>;
    testimonials: Schema.Attribute.Component<'ds.testimonial-card', true>;
    testimonialTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whyCards: Schema.Attribute.Component<'ds.icon-card', true>;
    whyLabel: Schema.Attribute.String;
    whySubtitle: Schema.Attribute.Text;
    whyTitle: Schema.Attribute.String;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.Text;
    caption: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    focalPoint: Schema.Attribute.JSON;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.Text;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::session': AdminSession;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::about-us-page.about-us-page': ApiAboutUsPageAboutUsPage;
      'api::acronis-backup-page.acronis-backup-page': ApiAcronisBackupPageAcronisBackupPage;
      'api::aws-cloud-hosting-page.aws-cloud-hosting-page': ApiAwsCloudHostingPageAwsCloudHostingPage;
      'api::azure-cloud-hosting-page.azure-cloud-hosting-page': ApiAzureCloudHostingPageAzureCloudHostingPage;
      'api::bare-metal-server-page.bare-metal-server-page': ApiBareMetalServerPageBareMetalServerPage;
      'api::builder-page.builder-page': ApiBuilderPageBuilderPage;
      'api::builder-template.builder-template': ApiBuilderTemplateBuilderTemplate;
      'api::chat-session.chat-session': ApiChatSessionChatSession;
      'api::cloud-hosting-page.cloud-hosting-page': ApiCloudHostingPageCloudHostingPage;
      'api::cloud-storage-page.cloud-storage-page': ApiCloudStoragePageCloudStoragePage;
      'api::contact-submission.contact-submission': ApiContactSubmissionContactSubmission;
      'api::contact-us-page.contact-us-page': ApiContactUsPageContactUsPage;
      'api::cpanel-hosting-page.cpanel-hosting-page': ApiCpanelHostingPageCpanelHostingPage;
      'api::dedicated-server-page.dedicated-server-page': ApiDedicatedServerPageDedicatedServerPage;
      'api::domain-registration-page.domain-registration-page': ApiDomainRegistrationPageDomainRegistrationPage;
      'api::domain-transfer-page.domain-transfer-page': ApiDomainTransferPageDomainTransferPage;
      'api::email-hosting-page.email-hosting-page': ApiEmailHostingPageEmailHostingPage;
      'api::firewall-security-page.firewall-security-page': ApiFirewallSecurityPageFirewallSecurityPage;
      'api::footer.footer': ApiFooterFooter;
      'api::forex-vps-page.forex-vps-page': ApiForexVpsPageForexVpsPage;
      'api::google-cloud-hosting-page.google-cloud-hosting-page': ApiGoogleCloudHostingPageGoogleCloudHostingPage;
      'api::google-workspace-page.google-workspace-page': ApiGoogleWorkspacePageGoogleWorkspacePage;
      'api::gpu-cloud-hosting-page.gpu-cloud-hosting-page': ApiGpuCloudHostingPageGpuCloudHostingPage;
      'api::gpu-dedicated-server-page.gpu-dedicated-server-page': ApiGpuDedicatedServerPageGpuDedicatedServerPage;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::linux-cloud-hosting-page.linux-cloud-hosting-page': ApiLinuxCloudHostingPageLinuxCloudHostingPage;
      'api::linux-dedicated-server-page.linux-dedicated-server-page': ApiLinuxDedicatedServerPageLinuxDedicatedServerPage;
      'api::linux-vps-hosting-page.linux-vps-hosting-page': ApiLinuxVpsHostingPageLinuxVpsHostingPage;
      'api::managed-cloud-hosting-page.managed-cloud-hosting-page': ApiManagedCloudHostingPageManagedCloudHostingPage;
      'api::managed-dedicated-server-page.managed-dedicated-server-page': ApiManagedDedicatedServerPageManagedDedicatedServerPage;
      'api::managed-vps-hosting-page.managed-vps-hosting-page': ApiManagedVpsHostingPageManagedVpsHostingPage;
      'api::microsoft-365-page.microsoft-365-page': ApiMicrosoft365PageMicrosoft365Page;
      'api::navigation.navigation': ApiNavigationNavigation;
      'api::nvme-dedicated-server-page.nvme-dedicated-server-page': ApiNvmeDedicatedServerPageNvmeDedicatedServerPage;
      'api::page-registry.page-registry': ApiPageRegistryPageRegistry;
      'api::pam-mfa-page.pam-mfa-page': ApiPamMfaPagePamMfaPage;
      'api::pricing-page.pricing-page': ApiPricingPagePricingPage;
      'api::reseller-hosting-page.reseller-hosting-page': ApiResellerHostingPageResellerHostingPage;
      'api::shared-hosting-page.shared-hosting-page': ApiSharedHostingPageSharedHostingPage;
      'api::ssl-certificate-page.ssl-certificate-page': ApiSslCertificatePageSslCertificatePage;
      'api::tally-on-cloud-page.tally-on-cloud-page': ApiTallyOnCloudPageTallyOnCloudPage;
      'api::vapt-page.vapt-page': ApiVaptPageVaptPage;
      'api::veeam-backup-page.veeam-backup-page': ApiVeeamBackupPageVeeamBackupPage;
      'api::virtual-machine-page.virtual-machine-page': ApiVirtualMachinePageVirtualMachinePage;
      'api::vps-cpanel-page.vps-cpanel-page': ApiVpsCpanelPageVpsCpanelPage;
      'api::vps-hosting-page.vps-hosting-page': ApiVpsHostingPageVpsHostingPage;
      'api::vps-hosting-trial-page.vps-hosting-trial-page': ApiVpsHostingTrialPageVpsHostingTrialPage;
      'api::web-hosting-page.web-hosting-page': ApiWebHostingPageWebHostingPage;
      'api::whatsapp-lead.whatsapp-lead': ApiWhatsappLeadWhatsappLead;
      'api::why-us-section.why-us-section': ApiWhyUsSectionWhyUsSection;
      'api::windows-cloud-hosting-page.windows-cloud-hosting-page': ApiWindowsCloudHostingPageWindowsCloudHostingPage;
      'api::windows-dedicated-server-page.windows-dedicated-server-page': ApiWindowsDedicatedServerPageWindowsDedicatedServerPage;
      'api::windows-vps-hosting-page.windows-vps-hosting-page': ApiWindowsVpsHostingPageWindowsVpsHostingPage;
      'api::wordpress-hosting-page.wordpress-hosting-page': ApiWordpressHostingPageWordpressHostingPage;
      'api::zimbra-hosting-page.zimbra-hosting-page': ApiZimbraHostingPageZimbraHostingPage;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
