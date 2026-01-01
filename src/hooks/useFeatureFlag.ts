import { type FeatureFlag, isFeatureEnabled } from '@/lib/featureFlags';

/**
 * React hook to check if a feature flag is enabled
 * @param flag - The feature flag to check
 * @returns true if the feature is enabled, false otherwise
 * 
 * @example
 * const showRsvp = useFeatureFlag('showRsvpButton');
 * if (showRsvp) {
 *   return <RsvpButton />;
 * }
 */
export function useFeatureFlag(flag: FeatureFlag): boolean {
  return isFeatureEnabled(flag);
}

