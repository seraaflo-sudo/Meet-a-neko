export default function Home() {
  return (
    <main style={{
      minHeight: '100vh', 
      background: 'linear-gradient(to bottom, #FFD6E8, #FFB3D1)',
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'Arial',
      padding: '20px'
    }}>
      
      <h1 style={{fontSize: '40px', color: '#D63384'}}>🐱 Meet a Neko 🐱</h1>
      <p style={{fontSize: '18px', color: '#555', marginBottom: '30px'}}>
        Main bareng aku di Roblox yuk!
      </p>

      <a 
        href="https://roblox.com.bz/games/14153443454/Meet-a-neko?privateServerLinkCode=95802737358448062085151727225283" 
        target="_blank"
        style={{
          background: '#FF69B4',
          color: 'white',
          padding: '15px 30px',
          borderRadius: '20px',
          textDecoration: 'none',
          fontSize: '20px',
          fontWeight: 'bold',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
        }}
      >
        JOIN PRIVATE SERVER
      </a>

      <p style={{marginTop: '20px', fontSize: '12px', color: '#888'}}>
        Klik tombol di atas buat langsung masuk game
      </p>
    </main>
  )
}
