
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type SavingProject = {
  id: string;
  name: string;
  currentAmount: number;
  targetAmount: number;
  deadline: string;
};

const ActiveSavings = () => {
  // Données fictives pour les projets d'épargne
  const savingProjects: SavingProject[] = [
    {
      id: "1",
      name: "Moto-taxi",
      currentAmount: 250000,
      targetAmount: 500000,
      deadline: "15 Juin",
    },
    {
      id: "2",
      name: "Épargne familiale",
      currentAmount: 120000,
      targetAmount: 300000,
      deadline: "30 Juillet",
    },
  ];

  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Mes Épargnes Actives</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {savingProjects.length > 0 ? (
          savingProjects.map((project) => (
            <div key={project.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{project.name}</span>
                <span className="text-xs text-muted-foreground">Échéance: {project.deadline}</span>
              </div>
              <Progress 
                value={(project.currentAmount / project.targetAmount) * 100} 
                className="h-2" 
              />
              <div className="flex justify-between text-sm">
                <span>{project.currentAmount.toLocaleString()} FCFA</span>
                <span>{project.targetAmount.toLocaleString()} FCFA</span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-6 text-muted-foreground">
            Vous n'avez pas encore d'épargne active
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ActiveSavings;
