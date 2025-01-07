module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-firebase-storage",
      providerOptions: {
        serviceAccount: JSON.parse(env('FIREBASE_SERVICE_ACCOUNT', '{}')),
        bucket: env('STORAGE_BUCKET_URL', "debatemodai.firebasestorage.app"),
        sortInStorage: true,
        debug: false,
      },
    },
  },
});
