export interface ICar {
  name: string;
  color: string;
  id: number;
}

export interface IStartOptions {
  velocity: number;
  distance: number;
}

export interface IFinishedCar {
  id: number;
  isEngineCrashed: boolean;
  time: number;
}

export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export interface IWinnersOptions {
  sort: Sort;
  order: Order;
}

export enum Errors {
  OK = 200,
  Unauthorized = 401,
  NotFound = 404,
  internalServerError = 500,
}

export type Sort = 'id' | 'wins' | 'time';
export type Order = 'ASC' | 'DESC';
