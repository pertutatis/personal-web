export const HTTP = (url:string, body:string, method:string) => {
  return fetch(url, {
    method,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body
  })
  .then(response => {
    return response.body
  })
  .then(rb => {
    if (rb == null) return rb
    
    const reader = rb.getReader();

    return new ReadableStream({
      start(controller) {
        // The following function handles each data chunk
        function push() {
          // "done" is a Boolean and value a "Uint8Array"
          reader.read().then( ({done, value}) => {
            // If there is no more data to read
            if (done) {
              controller.close();
              return;
            }
            // Get the data and send it to the browser via the controller
            controller.enqueue(value);
            // Check chunks by logging to the console
            push();
          })
        }

        push();
      }
    });
  })
  .then(stream => {    
    // Respond with our stream
    return new Response(stream, { headers: { "Content-Type": "text/html" } });
  })
  .then(result => result)
  .catch(err => { throw err })
}
