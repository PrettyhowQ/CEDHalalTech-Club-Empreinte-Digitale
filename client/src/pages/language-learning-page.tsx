import { LanguageLearningPlatform } from "@/components/LanguageLearningPlatform";
import { GlobalLanguageExchange } from "@/components/GlobalLanguageExchange";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LanguageLearningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="courses" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="courses" className="flex items-center gap-2">
              📚 Cours de Langues
            </TabsTrigger>
            <TabsTrigger value="exchange" className="flex items-center gap-2">
              🌍 Échange Global
            </TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <LanguageLearningPlatform />
          </TabsContent>

          <TabsContent value="exchange">
            <GlobalLanguageExchange />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}