export default function GiveName({ params}: {
    params: { name: string },
    //searchParams: { id: string };
  }) {
    
      return (
        <div>
              My name is {params.name}.
        </div>
      )
    }


    //Expected "{ params: { name: string; }; searchParams: { id: string; }; }", got "PageProps".