export default function Footer(){
  return (
    <footer className="my-custom-footer fixed-bottom w-100 text-white" style={{height:40}}>
      <div className="w-100 h-100 d-flex align-items-center justify-content-center text-center px-3">
        <small>&copy; Букетик {new Date().getFullYear()} </small>
      </div>
    </footer>
  )
}