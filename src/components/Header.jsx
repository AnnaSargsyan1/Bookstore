export function Header() {
    return <header className="shadow-sm py-2">
        <div className="container">
            <div className="row mw-100">
                <div className="col-12 col-sm-4 d-flex flex-column align-items-center align-items-sm-start justify-content-center ps-4">
                    <img src="/icons/Logo.png" style={{width: 100, height: "auto"}} alt="Book Store Logo" />
                </div>
                <div className="col-12 col-sm-8 d-flex flex-column align-items-center align-items-sm-end justify-content-center pe-4">
                    <h1 className="m-0 fs-2 fs-sm-1 text-end">Welcome to My Store</h1>
                    <p className="text-muted m-0 text-end">Browse our amazing books collection</p>
                </div>
            </div>
        </div>
    </header>
}