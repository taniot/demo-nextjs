import { gql } from 'graphql-request';

const allSettings = gql`
  {
    allSettings {
      discussionSettingsDefaultCommentStatus
      discussionSettingsDefaultPingStatus
      generalSettingsDateFormat
      generalSettingsDescription
      generalSettingsEmail
      generalSettingsLanguage
      generalSettingsStartOfWeek
      generalSettingsTimeFormat
      generalSettingsTimezone
      generalSettingsTitle
      generalSettingsUrl
      readingSettingsPageForPosts
      readingSettingsPageOnFront
      readingSettingsPostsPerPage
      readingSettingsShowOnFront
      writingSettingsDefaultCategory
      writingSettingsDefaultPostFormat
      writingSettingsUseSmilies
    }
  }
`;

export type allSettings = {
  allSettings: {
    readingSettingsPageOnFront: number;
  };
};

export default allSettings;
