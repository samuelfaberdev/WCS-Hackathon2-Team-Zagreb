import Collapsible from "react-collapsible";

export default function FAQPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center mb-10">
        <h2 className="text-3xl font-bold">FAQ</h2>
      </div>
      <div className="w-[80%] flex flex-col">
        <Collapsible
          trigger="Qu'est ce [votre produit/service] et comment fonctionne-t-il?"
          triggerClassName="toto bg-[#00ACB0] text-white flex w-full font-medium text-2xl mb-4 p-4 rounded-lg"
          triggerOpenedClassName="toto bg-[#00ACB0] text-white flex w-full font-medium text-2xl mb-4 p-4 rounded-lg"
        >
          <p className="mb-4 pb-4 border-b-2 border-[#00ACB0]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
            scelerisque vitae, consequat in, pretium a, enim. Pellentesque
            congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum
            bibendum augue. Praesent egestas leo in pede. Praesent blandit odio
            eu enim.
          </p>
        </Collapsible>
        <Collapsible
          trigger="Comment puis-je contacter le support client de [votre produit/service]"
          triggerClassName="bg-[#00ACB0] text-white flex w-full font-medium text-2xl mb-4 p-4 rounded-lg"
          triggerOpenedClassName="bg-[#00ACB0] text-white flex w-full font-medium text-2xl mb-4 p-4 rounded-lg"
        >
          <p className="mb-4 pb-4 border-b-2 border-[#00ACB0]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
            scelerisque vitae, consequat in, pretium a, enim. Pellentesque
            congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum
            bibendum augue. Praesent egestas leo in pede. Praesent blandit odio
            eu enim.
          </p>
        </Collapsible>
        <Collapsible
          trigger="Comment puis-je supprimer mon compte?"
          triggerClassName="bg-[#00ACB0] text-white flex w-full font-medium text-2xl mb-4 p-4 rounded-lg"
          triggerOpenedClassName="bg-[#00ACB0] text-white flex w-full font-medium text-2xl mb-4 p-4 rounded-lg"
        >
          <p className="mb-4 pb-4 border-b-2 border-[#00ACB0]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
            scelerisque vitae, consequat in, pretium a, enim. Pellentesque
            congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum
            bibendum augue. Praesent egestas leo in pede. Praesent blandit odio
            eu enim.
          </p>
        </Collapsible>
        <Collapsible
          trigger="Y a t-il des tutoriels ou des ressources d'apprentissage disponibles pour m'aider a utiliser [votre produit/service]"
          triggerClassName="bg-[#00ACB0] text-white flex w-full font-medium text-2xl mb-4 p-4 rounded-lg"
          triggerOpenedClassName="bg-[#00ACB0] text-white flex w-full font-medium text-2xl mb-4 p-4 rounded-lg"
        >
          <p className="mb-4 pb-4 border-b-2 border-[#00ACB0]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
            scelerisque vitae, consequat in, pretium a, enim. Pellentesque
            congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum
            bibendum augue. Praesent egestas leo in pede. Praesent blandit odio
            eu enim.
          </p>
        </Collapsible>
        <Collapsible
          trigger="Comment puis-je réinitialiser mon mot de passe?"
          triggerClassName="bg-[#00ACB0] text-white flex w-full font-medium text-2xl mb-4 p-4 rounded-lg"
          triggerOpenedClassName="bg-[#00ACB0] text-white flex w-full font-medium text-2xl mb-4 p-4 rounded-lg"
        >
          <p className="mb-4 pb-4 border-b-2 border-[#00ACB0]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
            scelerisque vitae, consequat in, pretium a, enim. Pellentesque
            congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum
            bibendum augue. Praesent egestas leo in pede. Praesent blandit odio
            eu enim.
          </p>
        </Collapsible>
        <Collapsible
          trigger="Comment puis-je mettre à jour mon compte ou mes informations personnelles?"
          triggerClassName="bg-[#00ACB0] text-white flex w-full font-medium text-2xl mb-4 p-4 rounded-lg"
          triggerOpenedClassName="bg-[#00ACB0] text-white flex w-full font-medium text-2xl mb-4 p-4 rounded-lg"
        >
          <p className="mb-4 pb-4 border-b-2 border-[#00ACB0]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
            scelerisque vitae, consequat in, pretium a, enim. Pellentesque
            congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum
            bibendum augue. Praesent egestas leo in pede. Praesent blandit odio
            eu enim.
          </p>
        </Collapsible>
      </div>
    </div>
  );
}
