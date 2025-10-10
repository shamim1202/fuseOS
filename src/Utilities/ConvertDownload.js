// Convert File By Dowoloads --------------------->
function formatDownloads(num) {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
}

// Convert File By Size --------------------->
function formatFileSize(bytes) {
  if (bytes === 0 || isNaN(bytes)) return "0 B";

  const kb = 1024;
  const mb = kb * 1024;
  const gb = mb * 1024;

  if (bytes >= gb) {
    return (bytes / gb).toFixed(2).replace(/\.00$/, "") + " GB";
  } else if (bytes >= mb) {
    return (bytes / mb).toFixed(2).replace(/\.00$/, "") + " MB";
  } else if (bytes >= kb) {
    return (bytes / kb).toFixed(2).replace(/\.00$/, "") + " KB";
  } else {
    return bytes + " B";
  }
}

export { formatDownloads, formatFileSize };
