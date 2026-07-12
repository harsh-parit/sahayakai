export default function DocumentsList({ documents }) {
  return (
    <div className="documents-list">
      {documents?.map((doc, idx) => (
        <div key={idx} className="document-item">
          {doc.name}
        </div>
      ))}
    </div>
  );
}
