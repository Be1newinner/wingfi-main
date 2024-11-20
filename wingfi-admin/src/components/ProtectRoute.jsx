import { useRouter } from "next/router";

export default function ProtectedRoute({
  isAuthenticated,
  children,
  redirectTo,
}) {
  const Navigate = useRouter();
  if (isAuthenticated) {
    Navigate.replace(redirectTo);
    return;
  } else {
    return children;
  }
}
