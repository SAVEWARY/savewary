
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ActionButtons = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="border-none shadow-md bg-gradient-to-br from-tontine-purple-500/90 to-tontine-purple-700 text-white flex flex-col items-center justify-center p-4">
        <div className="mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14"></path>
            <path d="M5 12h14"></path>
          </svg>
        </div>
        <Button variant="ghost" className="text-white hover:bg-white/20 hover:text-white w-full">
          Créer un projet
        </Button>
      </Card>
      
      <Card className="border-none shadow-md bg-gradient-to-br from-tontine-blue-500/90 to-tontine-blue-700 text-white flex flex-col items-center justify-center p-4">
        <div className="mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <Button variant="ghost" className="text-white hover:bg-white/20 hover:text-white w-full">
          Rejoindre
        </Button>
      </Card>
    </div>
  );
};

export default ActionButtons;
