import { Navigation } from "@/components/navigation"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { RegisterForm } from "@/components/auth/register-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Palette } from "lucide-react"

export default function RegisterPage() {
  return (
    <ProtectedRoute requireAuth={false}>
      <div className="min-h-screen bg-background">
        <Navigation />

        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-2xl space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground">Join Mridang Community</h2>
              <p className="mt-2 text-muted-foreground">मृदंग समुदाय में शामिल हों</p>
            </div>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Create your account</CardTitle>
                <CardDescription>Choose your account type and get started with Mridang</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="customer" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="customer" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Customer
                    </TabsTrigger>
                    <TabsTrigger value="artisan" className="flex items-center gap-2">
                      <Palette className="h-4 w-4" />
                      Artisan
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="customer">
                    <div className="space-y-4 mb-6">
                      <h3 className="text-lg font-semibold text-card-foreground">Customer Account</h3>
                      <p className="text-muted-foreground text-sm">
                        Discover and purchase authentic handcrafted products from local artisans.
                      </p>
                    </div>
                    <RegisterForm userType="customer" />
                  </TabsContent>

                  <TabsContent value="artisan">
                    <div className="space-y-4 mb-6">
                      <h3 className="text-lg font-semibold text-card-foreground">Artisan Account</h3>
                      <p className="text-muted-foreground text-sm">
                        Showcase your crafts, tell your story, and reach customers worldwide.
                      </p>
                    </div>
                    <RegisterForm userType="artisan" />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
