// Test for JWT metadata

describe('JWT Metadata Tests', () => {
    it('should include subscription tier metadata', () => {
        const token = generateJWT({ subscriptionTier: 'premium' });
        const decoded = decodeJWT(token);
        expect(decoded.subscriptionTier).toEqual('premium');
    });
});