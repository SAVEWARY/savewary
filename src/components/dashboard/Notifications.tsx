
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Notification = {
  id: string;
  title: string;
  description: string;
  time: string;
  isNew: boolean;
};

const Notifications = () => {
  // Données fictives pour les notifications
  const notifications: Notification[] = [
    {
      id: "1",
      title: "Rappel de contribution",
      description: "N'oubliez pas votre contribution mensuelle au projet 'Moto-taxi'.",
      time: "Il y a 2 heures",
      isNew: true,
    },
    {
      id: "2",
      title: "Nouveau projet disponible",
      description: "Un nouveau projet d'épargne 'Équipement agricole' a été créé dans votre communauté.",
      time: "Hier",
      isNew: false,
    },
  ];

  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Notifications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-0">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 border-b last:border-b-0 ${notification.isNew ? 'bg-secondary/50' : ''}`}
          >
            <div className="flex items-start gap-2">
              <div className="flex-grow">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-sm">{notification.title}</h4>
                  {notification.isNew && (
                    <span className="h-2 w-2 rounded-full bg-tontine-purple-500"></span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
                <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
              </div>
            </div>
          </div>
        ))}
        {notifications.length === 0 && (
          <div className="text-center py-6 text-muted-foreground">
            Vous n'avez pas de notifications
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Notifications;
