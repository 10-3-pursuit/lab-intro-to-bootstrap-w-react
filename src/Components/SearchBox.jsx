export default function SearchBox () {
    return (
        <div className="active-purple-3 active-purple-4 mb-4">
  <input className="form-control" type="text" placeholder="Search posts by location..." aria-label="Search"/>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
  <button className="btn btn-primary me-md-2" type="button">Cancel</button>
</div>
</div>
    );
}