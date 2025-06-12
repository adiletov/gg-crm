import AuthLayout from "./app/layouts/AuthLayout";
import { SignIn } from "./modules/auth";

function App() {
  return (
    <AuthLayout>
      <SignIn />
    </AuthLayout>
  );
}

export default App;
