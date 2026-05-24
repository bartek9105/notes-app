import { useCompleteOnboardingMutation, useGetMyProfileQuery } from "@/api";
import { WelcomeModal } from "./welcome-modal";

export const Welcome = () => {
  const { data: profile, isLoading } = useGetMyProfileQuery();
  const { mutate: completeOnboarding, isPending } =
    useCompleteOnboardingMutation();

  const shouldShowWelcome =
    !isLoading && !!profile && !profile.has_completed_onboarding;

  const handleDismiss = () => {
    if (isPending) return;
    completeOnboarding();
  };

  return (
    <WelcomeModal
      isOpen={shouldShowWelcome}
      isPending={isPending}
      onDismiss={handleDismiss}
    />
  );
};
