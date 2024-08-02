const { OllamaEmbeddings } = require('@langchain/community/embeddings/ollama');

(async () => {
    try {
        const embeddings = new OllamaEmbeddings({
            model: "llama2", 
            baseUrl: process.env.OLLAMA_BASE_URL,
            requestOptions: {
                useMMap: true,
                numThread: 6,
                numGpu: 1,
            },
        });

        const documents = ["Hello World!", "Bye Bye"];
        const documentEmbeddings = await embeddings.embedDocuments(documents);
        console.log(documentEmbeddings);
    } catch (error) {
        console.error("Error embedding documents:", error);
    }
})();