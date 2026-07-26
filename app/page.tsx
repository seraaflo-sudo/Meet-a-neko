export default function Home() {
  const robloxLink = "https://roblox.com.bz/games/14153443454/Meet-a-neko?privateServerLinkCode=95802737358448062085151727225283"
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-900 via-black to-black text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-6xl font-extrabold mb-4">🐱 MEET A NEKO 🐱</h1>
      <p className="text-xl mb-10 text-pink-300">PRIVATE SERVER IS OPEN</p>
      <a href={robloxLink} target="_blank" className="bg-gradient-to-r from-pink-600 to-purple-600 px-12 py-5 rounded-2xl text-2xl font-bold">
        JOIN SERVER NOW
      </a>
    </main>
  )
      }
