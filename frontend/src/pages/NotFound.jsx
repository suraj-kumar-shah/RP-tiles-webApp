import { Compass } from "lucide-react";
import EmptyState from "../components/ui/EmptyState.jsx";
import Button from "../components/ui/Button.jsx";

export default function NotFound() {
  return (
    <div className="container-page py-24">
      <EmptyState
        icon={Compass}
        title="Page not found"
        description="The page you're looking for doesn't exist or may have moved."
        action={
          <Button to="/" variant="primary">
            Back to Home
          </Button>
        }
      />
    </div>
  );
}
