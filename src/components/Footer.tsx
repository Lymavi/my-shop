export default function Footer(){
  return (
    <footer className="my-custom-footer fixed-bottom w-100" style={{height:56}}>
      <div className="w-100 h-100 d-flex align-items-center justify-content-center text-center px-3">
        <small>&copy; {new Date().getFullYear()} Букетик </small>
      </div>
    </footer>
  )
}