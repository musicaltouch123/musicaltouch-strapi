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
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
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
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface SharedBandFormat extends Struct.ComponentSchema {
  collectionName: 'components_shared_band_formats';
  info: {
    displayName: 'Band Format';
  };
  attributes: {
    band_types: Schema.Attribute.Relation<
      'oneToMany',
      'api::band-type.band-type'
    >;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedBandFormatSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_band_format_sections';
  info: {
    displayName: 'Band Format Section';
  };
  attributes: {
    ambiance_band: Schema.Attribute.Component<'shared.band-format', true>;
    heading: Schema.Attribute.Text;
    lineup_text: Schema.Attribute.Text;
    other_band: Schema.Attribute.Component<'shared.band-format', true>;
    section_name: Schema.Attribute.String;
  };
}

export interface SharedBookingProcessSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_booking_process_sections';
  info: {
    displayName: 'Booking Process Section';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    section_name: Schema.Attribute.String;
    steps: Schema.Attribute.Component<
      'shared.about-and-csr-first-component',
      true
    >;
  };
}

export interface SharedCommonHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_common_heroes';
  info: {
    displayName: 'Common hero with image';
  };
  attributes: {
    additional_text: Schema.Attribute.Text;
    button_one_link: Schema.Attribute.String;
    button_one_text: Schema.Attribute.String;
    button_two_link: Schema.Attribute.String;
    button_two_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedCommonHeroWithoutImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_common_hero_without_images';
  info: {
    displayName: 'Common hero without image';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
  };
}

export interface SharedExperienceSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_experience_sections';
  info: {
    displayName: 'Experience Section';
  };
  attributes: {
    cover_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    section_name: Schema.Attribute.String;
    video_autoplay: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    youtube_link: Schema.Attribute.String;
  };
}

export interface SharedFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_sections';
  info: {
    displayName: 'Faq Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    faqs: Schema.Attribute.Component<'shared.quote', true>;
    heading: Schema.Attribute.String;
    hide_question_text: Schema.Attribute.String;
    section_name: Schema.Attribute.String;
    show_question_text: Schema.Attribute.String;
  };
}

export interface SharedHeadingSubHeadingAndRepeatedLine
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_heading_sub_heading_and_repeated_lines';
  info: {
    displayName: 'Heading, sub heading and repeated line';
  };
  attributes: {
    heading: Schema.Attribute.String;
    lines: Schema.Attribute.Component<'shared.text', true>;
    sub_heading: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    heading: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedImageOnly extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_onlies';
  info: {
    displayName: 'Image Only';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedOccasion extends Struct.ComponentSchema {
  collectionName: 'components_shared_occasions';
  info: {
    displayName: 'Occasion';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    section_name: Schema.Attribute.String;
    tiles: Schema.Attribute.Component<'shared.tiles-with-link', true>;
  };
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

export interface SharedRatingSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_rating_sections';
  info: {
    displayName: 'Rating Section';
  };
  attributes: {
    additional_items: Schema.Attribute.Component<
      'shared.about-and-csr-first-component',
      true
    >;
    heading: Schema.Attribute.Text;
    performance_number: Schema.Attribute.String;
    performance_text: Schema.Attribute.String;
    review_numbers: Schema.Attribute.String;
    review_text: Schema.Attribute.String;
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

export interface SharedSingersWithCategory extends Struct.ComponentSchema {
  collectionName: 'components_shared_singers_with_categories';
  info: {
    displayName: 'Singers with category';
  };
  attributes: {
    category: Schema.Attribute.String;
    singers: Schema.Attribute.Relation<'oneToMany', 'api::singer.singer'>;
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

export interface SharedSurpriseSingerScetion extends Struct.ComponentSchema {
  collectionName: 'components_shared_surprise_singer_scetions';
  info: {
    displayName: 'Surprise singer scetion';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    section_name: Schema.Attribute.String;
    singers: Schema.Attribute.Relation<'oneToMany', 'api::singer.singer'>;
  };
}

export interface SharedText extends Struct.ComponentSchema {
  collectionName: 'components_shared_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SharedTilesSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_tiles_sections';
  info: {
    displayName: 'Tiles section';
  };
  attributes: {
    additional_text: Schema.Attribute.String;
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    heading: Schema.Attribute.Text;
    image_tiles: Schema.Attribute.Component<
      'shared.about-and-csr-first-component',
      true
    >;
    section_name: Schema.Attribute.String;
  };
}

export interface SharedTilesWithLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_tiles_with_links';
  info: {
    displayName: 'Tiles with link';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedTimelineItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_timeline_items';
  info: {
    displayName: 'Timeline item';
  };
  attributes: {
    highlighted: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    time: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedTimelineSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_timeline_sections';
  info: {
    displayName: 'Timeline section';
  };
  attributes: {
    close_text: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    optional_sets: Schema.Attribute.Component<
      'shared.heading-sub-heading-and-repeated-line',
      false
    >;
    performance_sets: Schema.Attribute.Component<
      'shared.heading-sub-heading-and-repeated-line',
      false
    >;
    timeline: Schema.Attribute.Component<'shared.timeline-item', true>;
    tnc: Schema.Attribute.String;
  };
}

export interface SharedWeddingPerkSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_wedding_perk_sections';
  info: {
    displayName: 'Wedding Perk Section';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    section_name: Schema.Attribute.String;
  };
}

export interface SharedWhatWeDo extends Struct.ComponentSchema {
  collectionName: 'components_shared_what_we_dos';
  info: {
    displayName: 'What we do';
  };
  attributes: {
    heading: Schema.Attribute.Text;
    section_name: Schema.Attribute.String;
    tiles: Schema.Attribute.Component<
      'shared.about-and-csr-first-component',
      true
    >;
  };
}

export interface SharedYoutubeWithCover extends Struct.ComponentSchema {
  collectionName: 'components_shared_youtube_with_covers';
  info: {
    displayName: 'Youtube with cover';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
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
      'shared.band-format': SharedBandFormat;
      'shared.band-format-section': SharedBandFormatSection;
      'shared.booking-process-section': SharedBookingProcessSection;
      'shared.common-hero': SharedCommonHero;
      'shared.common-hero-without-image': SharedCommonHeroWithoutImage;
      'shared.experience-section': SharedExperienceSection;
      'shared.faq-section': SharedFaqSection;
      'shared.heading-sub-heading-and-repeated-line': SharedHeadingSubHeadingAndRepeatedLine;
      'shared.hero': SharedHero;
      'shared.image-only': SharedImageOnly;
      'shared.media': SharedMedia;
      'shared.occasion': SharedOccasion;
      'shared.quote': SharedQuote;
      'shared.rating-section': SharedRatingSection;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.singers-with-category': SharedSingersWithCategory;
      'shared.slider': SharedSlider;
      'shared.surprise-singer-scetion': SharedSurpriseSingerScetion;
      'shared.text': SharedText;
      'shared.tiles-section': SharedTilesSection;
      'shared.tiles-with-link': SharedTilesWithLink;
      'shared.timeline-item': SharedTimelineItem;
      'shared.timeline-section': SharedTimelineSection;
      'shared.wedding-perk-section': SharedWeddingPerkSection;
      'shared.what-we-do': SharedWhatWeDo;
      'shared.youtube-with-cover': SharedYoutubeWithCover;
    }
  }
}
