
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

const Auth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
      toast.success('Connexion réussie');
    }, 1500);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
      toast.success('Compte créé avec succès');
    }, 1500);
  };

  const handleSocialLogin = (provider: string) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
      toast.success(`Connexion avec ${provider} réussie`);
    }, 1500);
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-white to-secondary/20 dark:from-gray-900 dark:to-background">
      <div className="w-full max-w-md animate-fade-in">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Se connecter</TabsTrigger>
            <TabsTrigger value="register">Créer un compte</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Connexion</CardTitle>
                <CardDescription>
                  Connectez-vous à votre compte pour accéder à vos épargnes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email ou téléphone</Label>
                    <Input id="email" type="text" required />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Mot de passe</Label>
                      <Button variant="link" size="sm" className="px-0 h-auto font-normal text-xs">
                        Mot de passe oublié?
                      </Button>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Connexion en cours...' : 'Se connecter'}
                  </Button>
                </form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">
                        Ou continuer avec
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <Button variant="outline" onClick={() => handleSocialLogin('Google')} disabled={isLoading}>
                      Google
                    </Button>
                    <Button variant="outline" onClick={() => handleSocialLogin('Apple')} disabled={isLoading}>
                      Apple
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Créer un compte</CardTitle>
                <CardDescription>
                  Rejoignez notre plateforme d'épargne communautaire
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstname">Prénom</Label>
                      <Input id="firstname" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastname">Nom</Label>
                      <Input id="lastname" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email ou téléphone</Label>
                    <Input id="email" type="text" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Input id="password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user-type">Type d'utilisateur</Label>
                    <select 
                      id="user-type"
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="beginner">Débutant</option>
                      <option value="experienced">Familiarisé avec la crypto</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Pays / Devise</Label>
                    <select 
                      id="country"
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="cameroon">Cameroun (FCFA)</option>
                      <option value="senegal">Sénégal (FCFA)</option>
                      <option value="ivorycoast">Côte d'Ivoire (FCFA)</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Création en cours...' : 'Créer un compte'}
                  </Button>
                </form>
                
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">
                        Ou continuer avec
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <Button variant="outline" onClick={() => handleSocialLogin('Google')} disabled={isLoading}>
                      Google
                    </Button>
                    <Button variant="outline" onClick={() => handleSocialLogin('Apple')} disabled={isLoading}>
                      Apple
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Auth;
