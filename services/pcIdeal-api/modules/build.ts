'use server';

import { axiosRequest } from '@/services/utils/request';
import { RecommendedBuilds } from '../models/recommendedBuild';

export type CpuPreference = 'AMD' | 'INTEL' | 'no-preference';
export type GpuPreference = 'AMD' | 'NVIDIA' | 'no-preference';
export type UsageType = 'WORK' | 'GAMING' | 'CONTENT_CREATOR';

type CreateBuildDataType = {
  usageType: UsageType;
  cpuPreference: CpuPreference;
  gpuPreference: GpuPreference;
  budget: number;
};

export async function createBuild({
  usageType,
  cpuPreference,
  gpuPreference,
  budget,
}: CreateBuildDataType) {
  return axiosRequest<RecommendedBuilds>({
    method: 'POST',
    url: '/api/builds/recommendations',
    data: {
      usage_type: usageType,
      cpu_preference: cpuPreference,
      gpu_preference: gpuPreference,
      budget,
    },
  });
}
