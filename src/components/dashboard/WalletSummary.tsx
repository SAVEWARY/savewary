
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const WalletSummary = () => {
  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex justify-between items-center">
          <span>Mon Portefeuille</span>
          <Badge variant="outline" className="font-normal text-xs">Vérifié</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="fiat" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="fiat">FCFA</TabsTrigger>
            <TabsTrigger value="crypto">Crypto</TabsTrigger>
          </TabsList>
          
          <TabsContent value="fiat" className="space-y-4">
            <div>
              <p className="text-3xl font-bold">350,000 FCFA</p>
              <p className="text-muted-foreground text-sm">Solde disponible</p>
            </div>
            <Button className="w-full">Ajouter des fonds</Button>
          </TabsContent>

          <TabsContent value="crypto" className="space-y-4">
            <div>
              <p className="text-3xl font-bold">0.015 BTC</p>
              <p className="text-muted-foreground text-sm">≈ 500,000 FCFA</p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-secondary rounded-md p-2">
                <p className="font-medium">USDT</p>
                <p>150 USDT</p>
              </div>
              <div className="bg-secondary rounded-md p-2">
                <p className="font-medium">ETH</p>
                <p>0.08 ETH</p>
              </div>
            </div>
            <Button className="w-full">Gérer les cryptos</Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default WalletSummary;
