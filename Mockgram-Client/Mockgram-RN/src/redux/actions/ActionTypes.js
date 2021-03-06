// client related action types
export const CLIENT_LOGIN = "CLIENT_LOGIN";
export const CLIENT_LOGOUT = "CLIENT_LOGOUT";
export const ADD_CLIENT_PROFILE = "ADD_CLIENT_PROFILE";
export const ADD_CLIENT_PROFILE_FAILED = "ADD_CLIENT_PROFILE_FAILED";
export const ADD_CLIENT_INFO = "ADD_CLIENT_INFO";
export const UPDATE_CLIENT_PROFILE = "UPDATE_CLIENT_PROFILE";
export const REMOVE_CLIENT_INFO = "REMOVE_CLIENT_INFO";
export const CLIENT_LOGIN_FAILED = "USER_LOGIN_FAILED";
export const CLIENT_LOGOUT_FAILED = "USER_LOGOUT_FAILED";
export const GET_CLIENT_PROFILE_POST = "GET_CLIENT_PROFILE_POST";
export const ADD_CLIENT_PROFILE_POST = "ADD_CLIENT_PROFILE_POST";
export const ADD_TO_TOP_CLIENT_PROFILE_POST = "ADD_TO_TOP_PROFILE_POST";
export const REMOVE_CLIENT_PROFILE_POST = "REMOVE_CLIENT_PROFILE_POST";
export const RELOAD_CLIENT_PROFILE_POST = "RELOAD_CLIENT_PROFILE_POST";
export const CONNECT_SOCKET = "CONNECT_SOCKET";
export const DISCONNECT_SOCKET = "DISCONNECT_SOCKET";
export const REMOVE_CLIENT_PROFILE_AVATAR = "REMOVE_CLIENT_PROFILE_AVATAR";

// user behaviors
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";

// message related action types
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const READ_MESSAGE = "READ_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const MESSAGE_ERROR = "MESSAGE_ERROR";
export const RECALL_MESSAGE = "RECALL_MESSAGE";
export const UPDATE_LAST_MESSAGE_ID = "UPDATE_LAST_MESSAGE_ID";

// app related action types
export const APP_FINISH_INIT = "APP_FINISH_INIT";
export const SET_APP_LOCALE = "SET_APP_LOCALE";
export const GET_APP_LOCALE = "GET_APP_LOCALE";
export const UPDATE_APP_LOCALE = "UPDATE_APP_LOCALE";
export const UPDATE_APP_PERMISSION = "UPDATE_APP_PERMISSION";
export const UPDATE_APP_PERMISSIONS_INIT = "UPDATE_APP_PERMISSIONS_INIT";

// feed related action types
export const RELOAD_HOME_FEED = "RELOAD_HOME_FEED";
export const UPDATE_HOME_FEED = "UPDATE_HOME_FEED";
export const ADD_TO_HEAD_HOME_FEED = "ADD_TO_HEAD_HOME_FEED";
export const UPLOADING_POST = "UPLOADING_POST";
export const UPLOADED_POST = "UPLOADED_POST";
export const ADD_A_IMAGE = "ADD_A_IMAGE";
export const REMOVE_A_IMAGE = "REMOVE_A_IMAGE";
