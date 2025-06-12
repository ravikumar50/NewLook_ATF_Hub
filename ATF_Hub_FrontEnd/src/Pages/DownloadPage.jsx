import { useEffect, useState } from "react";

function DownloadPage() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch('https://<your-function-app-name>.azurewebsites.net/api/demofunctionapp') // Replace with actual function URL
      .then(res => res.json())
      .then(data => setFiles(data))
      .catch(err => console.error("Error fetching files:", err));
  }, []);

  return (
    <div className="p-10 text-white">
      <h2 className="text-3xl font-bold mb-6">Available Files</h2>
      <ul className="space-y-4">
        {files.map(file => (
          <li key={file.name}>
            <a 
              href={file.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline"
            >
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DownloadPage;
