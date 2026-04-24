import { Metadata } from './models/metadata';

export interface GetDeletionCostParams {
  metadata: Metadata;
}

export interface ReplaceDeletionCostParams {
  metadata: Metadata;
}

export interface ReallocateParams {
  metadata: Metadata;
}

export interface RecreateParams {
  metadata: Metadata;
}

export interface RestartParams {
  metadata: Metadata;
}

export interface GetStatusParams {
  metadata: Metadata;
}

export interface GetTokenParams {
  metadata: Metadata;
}
