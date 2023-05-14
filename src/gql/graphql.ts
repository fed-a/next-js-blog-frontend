import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  I18NLocaleCode: any;
  JSON: any;
  PostContentDynamicZoneInput: any;
  Upload: any;
};

export type About = {
  __typename?: 'About';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<AboutRelationResponseCollection>;
  myStack: Scalars['String'];
  stackImages: Array<Maybe<ComponentLandingImageName>>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  workExp?: Maybe<Array<Maybe<ComponentLandingWorkExp>>>;
};


export type AboutStackImagesArgs = {
  filters?: InputMaybe<ComponentLandingImageNameFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AboutWorkExpArgs = {
  filters?: InputMaybe<ComponentLandingWorkExpFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AboutEntity = {
  __typename?: 'AboutEntity';
  attributes?: Maybe<About>;
  id?: Maybe<Scalars['ID']>;
};

export type AboutEntityResponse = {
  __typename?: 'AboutEntityResponse';
  data?: Maybe<AboutEntity>;
};

export type AboutInput = {
  myStack?: InputMaybe<Scalars['String']>;
  stackImages?: InputMaybe<Array<InputMaybe<ComponentLandingImageNameInput>>>;
  title?: InputMaybe<Scalars['String']>;
  workExp?: InputMaybe<Array<InputMaybe<ComponentLandingWorkExpInput>>>;
};

export type AboutRelationResponseCollection = {
  __typename?: 'AboutRelationResponseCollection';
  data: Array<AboutEntity>;
};

export type Blog = {
  __typename?: 'Blog';
  createdAt?: Maybe<Scalars['DateTime']>;
  lastPostsTitle?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<BlogRelationResponseCollection>;
  tip?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BlogEntity = {
  __typename?: 'BlogEntity';
  attributes?: Maybe<Blog>;
  id?: Maybe<Scalars['ID']>;
};

export type BlogEntityResponse = {
  __typename?: 'BlogEntityResponse';
  data?: Maybe<BlogEntity>;
};

export type BlogInput = {
  lastPostsTitle?: InputMaybe<Scalars['String']>;
  tip?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type BlogRelationResponseCollection = {
  __typename?: 'BlogRelationResponseCollection';
  data: Array<BlogEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentDynamicContentImage = {
  __typename?: 'ComponentDynamicContentImage';
  id: Scalars['ID'];
  media: UploadFileEntityResponse;
};

export type ComponentDynamicContentText = {
  __typename?: 'ComponentDynamicContentText';
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type ComponentLandingImageName = {
  __typename?: 'ComponentLandingImageName';
  iconName: Scalars['String'];
  id: Scalars['ID'];
  order?: Maybe<Scalars['Int']>;
};

export type ComponentLandingImageNameFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLandingImageNameFiltersInput>>>;
  iconName?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentLandingImageNameFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLandingImageNameFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
};

export type ComponentLandingImageNameInput = {
  iconName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  order?: InputMaybe<Scalars['Int']>;
};

export type ComponentLandingMenuItem = {
  __typename?: 'ComponentLandingMenuItem';
  href: Scalars['String'];
  id: Scalars['ID'];
  order?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type ComponentLandingMenuItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLandingMenuItemFiltersInput>>>;
  href?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentLandingMenuItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLandingMenuItemFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentLandingMenuItemInput = {
  href?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  order?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentLandingProjectExample = {
  __typename?: 'ComponentLandingProjectExample';
  hrefPreview?: Maybe<Scalars['String']>;
  hrefSource?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type ComponentLandingProjectExampleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLandingProjectExampleFiltersInput>>>;
  hrefPreview?: InputMaybe<StringFilterInput>;
  hrefSource?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentLandingProjectExampleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLandingProjectExampleFiltersInput>>>;
};

export type ComponentLandingProjectExampleInput = {
  hrefPreview?: InputMaybe<Scalars['String']>;
  hrefSource?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ComponentLandingSocialLink = {
  __typename?: 'ComponentLandingSocialLink';
  href: Scalars['String'];
  iconName: Scalars['String'];
  id: Scalars['ID'];
};

export type ComponentLandingSocialLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLandingSocialLinkFiltersInput>>>;
  href?: InputMaybe<StringFilterInput>;
  iconName?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentLandingSocialLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLandingSocialLinkFiltersInput>>>;
};

export type ComponentLandingSocialLinkInput = {
  href?: InputMaybe<Scalars['String']>;
  iconName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentLandingTypingText = {
  __typename?: 'ComponentLandingTypingText';
  asciiImage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  openCommand: Scalars['String'];
};

export type ComponentLandingTypingTextFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLandingTypingTextFiltersInput>>>;
  asciiImage?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentLandingTypingTextFiltersInput>;
  openCommand?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLandingTypingTextFiltersInput>>>;
};

export type ComponentLandingTypingTextInput = {
  asciiImage?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  openCommand?: InputMaybe<Scalars['String']>;
};

export type ComponentLandingWorkExp = {
  __typename?: 'ComponentLandingWorkExp';
  from: Scalars['String'];
  id: Scalars['ID'];
  objectives?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  to: Scalars['String'];
  workName: Scalars['String'];
};

export type ComponentLandingWorkExpFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLandingWorkExpFiltersInput>>>;
  from?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentLandingWorkExpFiltersInput>;
  objectives?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLandingWorkExpFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  to?: InputMaybe<StringFilterInput>;
  workName?: InputMaybe<StringFilterInput>;
};

export type ComponentLandingWorkExpInput = {
  from?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  objectives?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  to?: InputMaybe<Scalars['String']>;
  workName?: InputMaybe<Scalars['String']>;
};

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial';
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  title: Scalars['String'];
};

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  socialNetwork?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  keywords?: Maybe<Scalars['String']>;
  metaDescription: Scalars['String'];
  metaImage: UploadFileEntityResponse;
  metaRobots?: Maybe<Scalars['String']>;
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>;
  metaTitle: Scalars['String'];
  metaViewport?: Maybe<Scalars['String']>;
  structuredData?: Maybe<Scalars['JSON']>;
};


export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = About | Blog | ComponentDynamicContentImage | ComponentDynamicContentText | ComponentLandingImageName | ComponentLandingMenuItem | ComponentLandingProjectExample | ComponentLandingSocialLink | ComponentLandingTypingText | ComponentLandingWorkExp | ComponentSharedMetaSocial | ComponentSharedSeo | Hero | I18NLocale | Menu | Post | Project | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Hero = {
  __typename?: 'Hero';
  consoleTexts?: Maybe<Array<Maybe<ComponentLandingTypingText>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  down: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<HeroRelationResponseCollection>;
  name: Scalars['String'];
  socialLinks?: Maybe<Array<Maybe<ComponentLandingSocialLink>>>;
  toContacts: Scalars['String'];
  toWorks: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HeroConsoleTextsArgs = {
  filters?: InputMaybe<ComponentLandingTypingTextFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HeroSocialLinksArgs = {
  filters?: InputMaybe<ComponentLandingSocialLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HeroEntity = {
  __typename?: 'HeroEntity';
  attributes?: Maybe<Hero>;
  id?: Maybe<Scalars['ID']>;
};

export type HeroEntityResponse = {
  __typename?: 'HeroEntityResponse';
  data?: Maybe<HeroEntity>;
};

export type HeroInput = {
  consoleTexts?: InputMaybe<Array<InputMaybe<ComponentLandingTypingTextInput>>>;
  down?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  socialLinks?: InputMaybe<Array<InputMaybe<ComponentLandingSocialLinkInput>>>;
  toContacts?: InputMaybe<Scalars['String']>;
  toWorks?: InputMaybe<Scalars['String']>;
};

export type HeroRelationResponseCollection = {
  __typename?: 'HeroRelationResponseCollection';
  data: Array<HeroEntity>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Menu = {
  __typename?: 'Menu';
  createdAt?: Maybe<Scalars['DateTime']>;
  items?: Maybe<Array<Maybe<ComponentLandingMenuItem>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<MenuRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type MenuItemsArgs = {
  filters?: InputMaybe<ComponentLandingMenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MenuEntity = {
  __typename?: 'MenuEntity';
  attributes?: Maybe<Menu>;
  id?: Maybe<Scalars['ID']>;
};

export type MenuEntityResponse = {
  __typename?: 'MenuEntityResponse';
  data?: Maybe<MenuEntity>;
};

export type MenuInput = {
  items?: InputMaybe<Array<InputMaybe<ComponentLandingMenuItemInput>>>;
};

export type MenuRelationResponseCollection = {
  __typename?: 'MenuRelationResponseCollection';
  data: Array<MenuEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAboutLocalization?: Maybe<AboutEntityResponse>;
  createBlogLocalization?: Maybe<BlogEntityResponse>;
  createHeroLocalization?: Maybe<HeroEntityResponse>;
  createMenuLocalization?: Maybe<MenuEntityResponse>;
  createPost?: Maybe<PostEntityResponse>;
  createPostLocalization?: Maybe<PostEntityResponse>;
  createProjectLocalization?: Maybe<ProjectEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAbout?: Maybe<AboutEntityResponse>;
  deleteBlog?: Maybe<BlogEntityResponse>;
  deleteHero?: Maybe<HeroEntityResponse>;
  deleteMenu?: Maybe<MenuEntityResponse>;
  deletePost?: Maybe<PostEntityResponse>;
  deleteProject?: Maybe<ProjectEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAbout?: Maybe<AboutEntityResponse>;
  updateBlog?: Maybe<BlogEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateHero?: Maybe<HeroEntityResponse>;
  updateMenu?: Maybe<MenuEntityResponse>;
  updatePost?: Maybe<PostEntityResponse>;
  updateProject?: Maybe<ProjectEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateAboutLocalizationArgs = {
  data?: InputMaybe<AboutInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateBlogLocalizationArgs = {
  data?: InputMaybe<BlogInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateHeroLocalizationArgs = {
  data?: InputMaybe<HeroInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateMenuLocalizationArgs = {
  data?: InputMaybe<MenuInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePostArgs = {
  data: PostInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePostLocalizationArgs = {
  data?: InputMaybe<PostInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateProjectLocalizationArgs = {
  data?: InputMaybe<ProjectInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteAboutArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteBlogArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteHeroArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteMenuArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteProjectArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAboutArgs = {
  data: AboutInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateBlogArgs = {
  data: BlogInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateHeroArgs = {
  data: HeroInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateMenuArgs = {
  data: MenuInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdatePostArgs = {
  data: PostInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateProjectArgs = {
  data: ProjectInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Post = {
  __typename?: 'Post';
  content: Array<Maybe<PostContentDynamicZone>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PostRelationResponseCollection>;
  metaTitle: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  thumbnail?: Maybe<UploadFileEntityResponse>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PostLocalizationsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PostContentDynamicZone = ComponentDynamicContentImage | ComponentDynamicContentText | Error;

export type PostEntity = {
  __typename?: 'PostEntity';
  attributes?: Maybe<Post>;
  id?: Maybe<Scalars['ID']>;
};

export type PostEntityResponse = {
  __typename?: 'PostEntityResponse';
  data?: Maybe<PostEntity>;
};

export type PostEntityResponseCollection = {
  __typename?: 'PostEntityResponseCollection';
  data: Array<PostEntity>;
  meta: ResponseCollectionMeta;
};

export type PostFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PostFiltersInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PostInput = {
  content?: InputMaybe<Array<Scalars['PostContentDynamicZoneInput']>>;
  description?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PostRelationResponseCollection = {
  __typename?: 'PostRelationResponseCollection';
  data: Array<PostEntity>;
};

export type Project = {
  __typename?: 'Project';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ProjectRelationResponseCollection>;
  projects?: Maybe<Array<Maybe<ComponentLandingProjectExample>>>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ProjectProjectsArgs = {
  filters?: InputMaybe<ComponentLandingProjectExampleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProjectEntity = {
  __typename?: 'ProjectEntity';
  attributes?: Maybe<Project>;
  id?: Maybe<Scalars['ID']>;
};

export type ProjectEntityResponse = {
  __typename?: 'ProjectEntityResponse';
  data?: Maybe<ProjectEntity>;
};

export type ProjectInput = {
  projects?: InputMaybe<Array<InputMaybe<ComponentLandingProjectExampleInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ProjectRelationResponseCollection = {
  __typename?: 'ProjectRelationResponseCollection';
  data: Array<ProjectEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  about?: Maybe<AboutEntityResponse>;
  blog?: Maybe<BlogEntityResponse>;
  hero?: Maybe<HeroEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  menu?: Maybe<MenuEntityResponse>;
  post?: Maybe<PostEntityResponse>;
  posts?: Maybe<PostEntityResponseCollection>;
  project?: Maybe<ProjectEntityResponse>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAboutArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryBlogArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryHeroArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMenuArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryPostArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProjectArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  blurhash?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  blurhash?: InputMaybe<StringFilterInput>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  blurhash?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type PostQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  id?: InputMaybe<Scalars['ID']>;
}>;


export type PostQuery = { __typename?: 'Query', post?: { __typename?: 'PostEntityResponse', data?: { __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', title: string, description: string, metaTitle: string, slug: string, locale?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, blurhash?: string | null, formats?: any | null, url: string } | null } | null } | null, content: Array<{ __typename: 'ComponentDynamicContentImage', id: string, media: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, blurhash?: string | null, formats?: any | null, url: string } | null } | null } } | { __typename: 'ComponentDynamicContentText', id: string, text: string } | { __typename: 'Error' } | null> } | null } | null } | null };

export type ImageFragmentFragment = { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, blurhash?: string | null, formats?: any | null, url: string } | null } | null };

export type PostsQueryVariables = Exact<{
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type PostsQuery = { __typename?: 'Query', posts?: { __typename?: 'PostEntityResponseCollection', data: Array<{ __typename?: 'PostEntity', id?: string | null, attributes?: { __typename?: 'Post', title: string, description: string, metaTitle: string, slug: string, locale?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, blurhash?: string | null, formats?: any | null, url: string } | null } | null } | null, content: Array<{ __typename: 'ComponentDynamicContentImage', id: string, media: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, blurhash?: string | null, formats?: any | null, url: string } | null } | null } } | { __typename: 'ComponentDynamicContentText', id: string, text: string } | { __typename: 'Error' } | null> } | null }> } | null };

export type LocalizationQueryVariables = Exact<{ [key: string]: never; }>;


export type LocalizationQuery = { __typename?: 'Query', i18NLocales?: { __typename?: 'I18NLocaleEntityResponseCollection', data: Array<{ __typename?: 'I18NLocaleEntity', attributes?: { __typename?: 'I18NLocale', name?: string | null, code?: string | null } | null }> } | null };

export type LandingQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type LandingQuery = { __typename?: 'Query', blog?: { __typename?: 'BlogEntityResponse', data?: { __typename?: 'BlogEntity', id?: string | null, attributes?: { __typename?: 'Blog', title?: string | null, tip?: string | null, lastPostsTitle?: string | null, locale?: string | null } | null } | null } | null, about?: { __typename?: 'AboutEntityResponse', data?: { __typename?: 'AboutEntity', id?: string | null, attributes?: { __typename?: 'About', title: string, myStack: string, locale?: string | null, stackImages: Array<{ __typename?: 'ComponentLandingImageName', id: string, order?: number | null, iconName: string } | null>, workExp?: Array<{ __typename?: 'ComponentLandingWorkExp', id: string, order?: number | null, workName: string, from: string, to: string, objectives?: string | null } | null> | null } | null } | null } | null, hero?: { __typename?: 'HeroEntityResponse', data?: { __typename?: 'HeroEntity', id?: string | null, attributes?: { __typename?: 'Hero', name: string, toContacts: string, toWorks: string, down: string, consoleTexts?: Array<{ __typename?: 'ComponentLandingTypingText', id: string, openCommand: string, asciiImage?: string | null } | null> | null, socialLinks?: Array<{ __typename?: 'ComponentLandingSocialLink', id: string, iconName: string } | null> | null } | null } | null } | null, project?: { __typename?: 'ProjectEntityResponse', data?: { __typename?: 'ProjectEntity', id?: string | null, attributes?: { __typename?: 'Project', title: string, locale?: string | null, projects?: Array<{ __typename?: 'ComponentLandingProjectExample', id: string, name?: string | null, hrefSource?: string | null, hrefPreview?: string | null } | null> | null } | null } | null } | null };

export type MenuQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;


export type MenuQuery = { __typename?: 'Query', menu?: { __typename?: 'MenuEntityResponse', data?: { __typename?: 'MenuEntity', id?: string | null, attributes?: { __typename?: 'Menu', locale?: string | null, items?: Array<{ __typename?: 'ComponentLandingMenuItem', id: string, order?: number | null, title: string, href: string } | null> | null } | null } | null } | null };

export const ImageFragmentFragmentDoc = gql`
    fragment ImageFragment on UploadFileEntityResponse {
  data {
    attributes {
      name
      alternativeText
      blurhash
      formats
      url
    }
  }
}
    `;
export const PostDocument = gql`
    query Post($locale: I18NLocaleCode, $id: ID) {
  post(locale: $locale, id: $id) {
    data {
      id
      attributes {
        title
        description
        metaTitle
        slug
        locale
        thumbnail {
          ...ImageFragment
        }
        content {
          __typename
          ... on ComponentDynamicContentText {
            id
            text
          }
          ... on ComponentDynamicContentImage {
            id
            media {
              ...ImageFragment
            }
          }
        }
      }
    }
  }
}
    ${ImageFragmentFragmentDoc}`;

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostQuery(baseOptions?: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, options);
      }
export function usePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, options);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>;
export const PostsDocument = gql`
    query Posts($filters: PostFiltersInput, $pagination: PaginationArg, $sort: [String], $locale: I18NLocaleCode) {
  posts(filters: $filters, pagination: $pagination, sort: $sort, locale: $locale) {
    data {
      id
      attributes {
        title
        description
        metaTitle
        slug
        locale
        thumbnail {
          ...ImageFragment
        }
        content {
          __typename
          ... on ComponentDynamicContentText {
            id
            text
          }
          ... on ComponentDynamicContentImage {
            id
            media {
              ...ImageFragment
            }
          }
        }
      }
    }
  }
}
    ${ImageFragmentFragmentDoc}`;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export const LocalizationDocument = gql`
    query Localization {
  i18NLocales {
    data {
      attributes {
        name
        code
      }
    }
  }
}
    `;

/**
 * __useLocalizationQuery__
 *
 * To run a query within a React component, call `useLocalizationQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocalizationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocalizationQuery({
 *   variables: {
 *   },
 * });
 */
export function useLocalizationQuery(baseOptions?: Apollo.QueryHookOptions<LocalizationQuery, LocalizationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LocalizationQuery, LocalizationQueryVariables>(LocalizationDocument, options);
      }
export function useLocalizationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LocalizationQuery, LocalizationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LocalizationQuery, LocalizationQueryVariables>(LocalizationDocument, options);
        }
export type LocalizationQueryHookResult = ReturnType<typeof useLocalizationQuery>;
export type LocalizationLazyQueryHookResult = ReturnType<typeof useLocalizationLazyQuery>;
export type LocalizationQueryResult = Apollo.QueryResult<LocalizationQuery, LocalizationQueryVariables>;
export const LandingDocument = gql`
    query Landing($locale: I18NLocaleCode) {
  blog(locale: $locale) {
    data {
      id
      attributes {
        title
        tip
        lastPostsTitle
        locale
      }
    }
  }
  about(locale: $locale) {
    data {
      id
      attributes {
        title
        myStack
        stackImages(sort: ["id"]) {
          id
          order
          iconName
        }
        workExp(sort: ["id"]) {
          id
          order
          workName
          from
          to
          objectives
        }
        locale
      }
    }
  }
  hero(locale: $locale) {
    data {
      id
      attributes {
        name
        toContacts
        toWorks
        down
        consoleTexts {
          id
          openCommand
          asciiImage
        }
        socialLinks {
          id
          iconName
        }
      }
    }
  }
  project(locale: $locale) {
    data {
      id
      attributes {
        title
        projects {
          id
          name
          hrefSource
          hrefPreview
        }
        locale
      }
    }
  }
}
    `;

/**
 * __useLandingQuery__
 *
 * To run a query within a React component, call `useLandingQuery` and pass it any options that fit your needs.
 * When your component renders, `useLandingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLandingQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useLandingQuery(baseOptions?: Apollo.QueryHookOptions<LandingQuery, LandingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LandingQuery, LandingQueryVariables>(LandingDocument, options);
      }
export function useLandingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LandingQuery, LandingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LandingQuery, LandingQueryVariables>(LandingDocument, options);
        }
export type LandingQueryHookResult = ReturnType<typeof useLandingQuery>;
export type LandingLazyQueryHookResult = ReturnType<typeof useLandingLazyQuery>;
export type LandingQueryResult = Apollo.QueryResult<LandingQuery, LandingQueryVariables>;
export const MenuDocument = gql`
    query Menu($locale: I18NLocaleCode) {
  menu(locale: $locale) {
    data {
      id
      attributes {
        items(sort: ["id"]) {
          id
          order
          title
          href
        }
        locale
      }
    }
  }
}
    `;

/**
 * __useMenuQuery__
 *
 * To run a query within a React component, call `useMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenuQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useMenuQuery(baseOptions?: Apollo.QueryHookOptions<MenuQuery, MenuQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MenuQuery, MenuQueryVariables>(MenuDocument, options);
      }
export function useMenuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MenuQuery, MenuQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MenuQuery, MenuQueryVariables>(MenuDocument, options);
        }
export type MenuQueryHookResult = ReturnType<typeof useMenuQuery>;
export type MenuLazyQueryHookResult = ReturnType<typeof useMenuLazyQuery>;
export type MenuQueryResult = Apollo.QueryResult<MenuQuery, MenuQueryVariables>;