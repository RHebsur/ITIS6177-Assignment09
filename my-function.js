exports.handler = async (event) => {
    // TODO implement
    const displayMessage = "Rakesh Hebsur says " + event['queryStringParameters']['keyword'];
    const response = {
        statusCode: 200,
        body: displayMessage
    };
    return response;
};
