# RandomUserGenerator SDK utility: feature_add
module RandomUserGeneratorUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
