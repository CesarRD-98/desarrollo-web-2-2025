import NavBar from "../Componentes/NavBar";
import ProviderCarrito from "../Provider/ProviderCarrito";

export default function  LayoutProducto({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>

      
      <ProviderCarrito>
        <NavBar></NavBar>
            {children}
      </ProviderCarrito>
      
    </div>
  );
}