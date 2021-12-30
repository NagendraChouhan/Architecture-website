
async function login(emailId) {
try {
    const res = await Auth(emailId, "Company Name");
    console.log(res);
    console.log(res.mail);
    console.log(res.OTP);
    console.log(res.success);
    location.href='/otp';
} catch (error) {
    console.log("errrrrrrrrr"+error);
}
}