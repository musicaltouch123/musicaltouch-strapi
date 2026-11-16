import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAboutAndCsrEnquiry extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_and_csr_enquiries';
  info: {
    displayName: 'About & CSR Enquiry';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface SharedAboutAndCsrFirstComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_and_csr_first_components';
  info: {
    displayName: 'About & CSR First Component';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedAboutAndCsrPartners extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_and_csr_partners';
  info: {
    displayName: 'About & CSR partners';
  };
  attributes: {
    description: Schema.Attribute.Text;
    logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    section_name: Schema.Attribute.String;
  };
}

export interface SharedAboutAndCsrSecondComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_and_csr_second_components';
  info: {
    displayName: 'About & CSR Second Component';
  };
  attributes: {
    additional_text: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    link_for_additional_text: Schema.Attribute.String;
    quote: Schema.Attribute.Component<'shared.quote', false>;
    section_name: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface SharedAboutOurStory extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_our_stories';
  info: {
    displayName: 'About Our Story';
  };
  attributes: {
    description: Schema.Attribute.Text;
    section_name: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'shared.quote', true>;
    title: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    main_text: Schema.Attribute.Text;
    sub_text: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.about-and-csr-enquiry': SharedAboutAndCsrEnquiry;
      'shared.about-and-csr-first-component': SharedAboutAndCsrFirstComponent;
      'shared.about-and-csr-partners': SharedAboutAndCsrPartners;
      'shared.about-and-csr-second-component': SharedAboutAndCsrSecondComponent;
      'shared.about-our-story': SharedAboutOurStory;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
