import { GuildChannel, Collection } from "discord.js";

export async function getChannel(channels: Collection<string, GuildChannel>, arg: string, type?: Exclude<keyof typeof ChannelType, 'dm' | 'group' | 'unknown'>) {
  return channels.filter(channel => type ? channel.type === type : true).get(arg)
    || channels.filter(channel => type ? channel.type === type : true).find(channel => channel.name === arg)
    || channels.filter(channel => type ? channel.type === type : true).find(channel => channel.name.toLowerCase() === arg.toLowerCase());
};