import { Navigation } from "@/components/navigation"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { LoginForm } from "@/components/auth/login-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <ProtectedRoute requireAuth={false}>
      <div className="min-h-screen bg-background">
        <Navigation />

        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground">Welcome Back</h2>
              <p className="mt-2 text-muted-foreground">वापस स्वागत है</p>
            </div>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Sign in to your account</CardTitle>
                <CardDescription>Enter your credentials to access your Mridang account</CardDescription>
              </CardHeader>
              <CardContent>
                <LoginForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
