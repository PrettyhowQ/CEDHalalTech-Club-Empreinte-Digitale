import { ExportModulesDubaiSaudi } from "@/components/ExportModulesDubaiSaudi";
import { GlobalMuslimExpansion } from "@/components/GlobalMuslimExpansion";
import { FiqhExportGenerator } from "@/components/FiqhExportGenerator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ExportModulesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="global" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="global" className="flex items-center gap-2">
              🌍 Expansion Mondiale
            </TabsTrigger>
            <TabsTrigger value="gulf" className="flex items-center gap-2">
              🇦🇪🇸🇦 Golfe (Dubaï/Arabie)
            </TabsTrigger>
            <TabsTrigger value="files" className="flex items-center gap-2">
              📦 Générateur Export
            </TabsTrigger>
          </TabsList>

          <TabsContent value="global">
            <GlobalMuslimExpansion />
          </TabsContent>

          <TabsContent value="gulf">
            <ExportModulesDubaiSaudi />
          </TabsContent>

          <TabsContent value="files">
            <FiqhExportGenerator />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}