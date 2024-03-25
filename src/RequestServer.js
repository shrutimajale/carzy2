async function RequestServer(data, apiString, headerObject, methodType) {
  try {
    const response = await fetch(apiString, {
      method: methodType, // or 'PUT'
      headers: headerObject,
      body: JSON.stringify(data),
    });

    return response;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}

export default RequestServer;
