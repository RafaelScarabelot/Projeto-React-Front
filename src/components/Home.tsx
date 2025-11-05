
function Home() {
 

  return (
    <>
      <header className="flex items-center justify-between px-8 py-4 shadow-sm border-b border-gray-100">
  
      <div className="flex items-center space-x-2">
        <img
          src="/logo.png"
          alt="Pizza logo"
          className="w-8 h-8"
        />
        <h2 className="text-2xl font-bold text-orange-500">Pizza</h2>
      </div>


      <nav className="flex items-center space-x-8 text-gray-700 font-medium">
        <a href="#" className="text-orange-500 border-b-2 border-orange-500 pb-1">
          Home
        </a>
        <a href="#">Serviço</a>
        <a href="#">Contato</a>
        <a href="#">Sobre</a>
      </nav>

      <div className="flex items-center space-x-4">
        <button>
          <i className="ri-shopping-cart-2-line text-2xl"></i>
        </button>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-semibold">
          Carrinho
        </button>
      </div>
    </header>

    <main className="grid grid-cols-2 min-h-screen">
  <div className="flex flex-col justify-center px-12">
    <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
      A Pizza Mais Saborosa e Deliciosa da América
    </h2>
    <p className="text-gray-600 mt-4 text-lg">
      Lorem ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão.
      O Lorem Ipsum tem sido o texto padrão usado por essa indústria desde sempre.
    </p>

      <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-semibold">
          Carrinho
        </button>
  </div>
  <div className="flex items-center justify-center">
    <img
      src="/pizza.png"
      alt="Pizza deliciosa"
      className="w-4/4 rounded-1xl h-3/5 shadow-lg"
    />
  </div>
</main>


   
    </>
  )
}

export default Home 
