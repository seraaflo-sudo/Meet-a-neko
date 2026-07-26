export default function Home() {
  return (
    <main style={{
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0a0a0a, #1a0a1a)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: "'Poppins', 'Arial', sans-serif",
      padding: '20px',
      textAlign: 'center'
    }}>
      
      <div style={{
        background: 'rgba(20,20,20,0.85)',
        padding: '45px',
        borderRadius: '24px',
        backdropFilter: 'blur(10px)',
        border: '1px solid #333',
        boxShadow: '0 0 20px rgba(255,20,147,0.2)'
      }}>
        <img 
          src="https://i.imgur.com/8QfXbL2.png" 
          alt="anime girl"
          style={{width: '160px', height: '160px', borderRadius: '50%', border: '2px solid #FF69B4', objectFit: 'cover', boxShadow: '0 0 20px rgba(255,105,180,0.4)'}}
        />
        <h1 style={{fontSize: '42px', color: '#e0e0e0', margin: '15px 0', fontWeight: '700'}}>🥵 Meet a Neko 😳</h1>
        <p style={{fontSize: '16px', color: '#888', marginBottom: '30px', letterSpacing: '1px'}}>
          PRIVATE CONDO SERVER
        </p>

        <a 
          href="https://roblox.com.bz/games/14153443454/Meet-a-neko?privateServerLinkCode=95802737358448062085151727225283" 
          target="_blank"
          style={{
            background: '#2a2a2a',
            color: '#FF69B4',
            padding: '16px 40px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: '600',
            border: '1px solid #FF69B4',
            display: 'inline-block'
          }}
        >
          JOIN SERVER NOW
        </a>

        <p style={{fontSize: '12px', color: '#555', marginTop: '20px'}}>
          Click to join the private Roblox server
        </p>
      </div>

    </main>
  )
}
