export default function Home() {
  return (
    <main style={{
      minHeight: '100vh', 
      background: 'url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920) center/cover no-repeat', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'Arial',
      padding: '20px',
      textAlign: 'center'
    }}>
      
      <div style={{
        background: 'rgba(10,10,10,0.8)',
        padding: '45px',
        borderRadius: '30px',
        backdropFilter: 'blur(15px)',
        border: '2px solid #FF1493',
        boxShadow: '0 0 40px rgba(255,20,147,0.6)'
      }}>
        <img 
          src="https://i.imgur.com/JqYeZkL.png" 
          alt="neko"
          style={{width: '160px', height: '160px', borderRadius: '50%', border: '4px solid #FF1493', boxShadow: '0 0 25px #FF1493', objectFit: 'cover'}}
        />
        <h1 style={{fontSize: '50px', color: '#FF1493', margin: '15px 0', textShadow: '0 0 15px #FF1493'}}>🐱 Meet a Neko 🐱</h1>
        <p style={{fontSize: '20px', color: '#ddd', marginBottom: '30px', letterSpacing: '2px', fontWeight: 'bold'}}>
          PRIVATE CONDO SERVER
        </p>

        <a 
          href="https://roblox.com.bz/games/14153443454/Meet-a-neko?privateServerLinkCode=95802737358448062085151727225283" 
          target="_blank"
          style={{
            background: 'linear-gradient(90deg, #FF1493, #C71585)',
            color: 'white',
            padding: '20px 50px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontSize: '24px',
            fontWeight: 'bold',
            boxShadow: '0 0 30px #FF1493',
            display: 'inline-block'
          }}
        >
          JOIN SERVER NOW 🔥
        </a>

        <p style={{fontSize: '13px', color: '#aaa', marginTop: '25px'}}>
          Click to join the private Roblox server
        </p>
      </div>

    </main>
  )
}
