export type UserDetails = {
  discordId: string;
  accessToken: string;
  refreshToken: string;
};

export type UserDetailsToUpdate = {
  accessToken: string;
  refreshToken: string;
};
