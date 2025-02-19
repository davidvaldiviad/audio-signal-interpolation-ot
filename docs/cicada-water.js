
/* cicada_water.js */

const ExpBData = {
    sourceAudio: "results/cicada-water/sounds/source.wav",
    sourceImage: "results/cicada-water/figs/source.png",
    targetAudio: "results/cicada-water/sounds/target.wav",
    targetImage: "results/cicada-water/figs/target.png",
  
    // Example: Subset2 has param0 + param2
    otData: [
      {
        type: "Exact OT",
        interpolation: "0%",
        regularization: "-",
        timelimiting: "-",
        audioUrl: "results/cicada-water/sounds/cicada_water_exact_ot_interpolation_0.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_exact_ot_interpolation_0.png",
        selected: false
      },
      {
        type: "Exact OT",
        interpolation: "25%",
        regularization: "-",
        timelimiting: "-",
        audioUrl: "results/cicada-water/sounds/cicada_water_exact_ot_interpolation_25.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_exact_ot_interpolation_25.png",
        selected: false
      },
      {
        type: "Exact OT",
        interpolation:" 50%",
        regularization: "-",
        timelimiting: "-",
        audioUrl: "results/cicada-water/sounds/cicada_water_exact_ot_interpolation_50.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_exact_ot_interpolation_50.png",
        selected: false
      },
      {
        type: "Exact OT",
        interpolation: "75%",
        regularization: "-",
        timelimiting: "-",
        audioUrl: "results/cicada-water/sounds/cicada_water_exact_ot_interpolation_75.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_exact_ot_interpolation_75.png",
        selected: false
      },
      {
        type: "Exact OT",
        interpolation: "100%",
        regularization: "-",
        timelimiting: "-",
        audioUrl: "results/cicada-water/sounds/cicada_water_exact_ot_interpolation_100.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_exact_ot_interpolation_100.png",
        selected: false
      },
    ],
  
    // Example: Subset1 has param0, param1, param2, param3
    uotData: [
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "0%",
        regularization: 10,
        timelimiting: 0,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_0_reg_10_interpolation_0.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_0_reg_10_interpolation_0.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "25%",
        regularization: 10,
        timelimiting: 0,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_0_reg_10_interpolation_25.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_0_reg_10_interpolation_25.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "50%",
        regularization: 10,
        timelimiting: 0,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_0_reg_10_interpolation_50.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_0_reg_10_interpolation_50.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "75%",
        regularization: 10,
        timelimiting: 0,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_0_reg_10_interpolation_75.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_0_reg_10_interpolation_75.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "100%",
        regularization: 10,
        timelimiting: 0,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_0_reg_10_interpolation_100.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_0_reg_10_interpolation_100.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "0%",
        regularization: 1,
        timelimiting: 0,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_0_reg_1_interpolation_0.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_0_reg_1_interpolation_0.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "25%",
        regularization: 1,
        timelimiting: 0,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_0_reg_1_interpolation_25.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_0_reg_1_interpolation_25.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "50%",
        regularization: 1,
        timelimiting: 0,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_0_reg_1_interpolation_50.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_0_reg_1_interpolation_50.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "75%",
        regularization: 1,
        timelimiting: 0,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_0_reg_1_interpolation_75.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_0_reg_1_interpolation_75.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "100%",
        regularization: 1,
        timelimiting: 0,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_0_reg_1_interpolation_100.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_0_reg_1_interpolation_100.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "0%",
        regularization: 0.01,
        timelimiting: 0,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_0_reg_0.01_interpolation_0.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_0_reg_0.01_interpolation_0.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "25%",
        regularization: 0.01,
        timelimiting: 0,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_0_reg_0.01_interpolation_25.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_0_reg_0.01_interpolation_25.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "50%",
        regularization: 0.01,
        timelimiting: 0,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_0_reg_0.01_interpolation_50.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_0_reg_0.01_interpolation_50.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "75%",
        regularization: 0.01,
        timelimiting: 0,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_0_reg_0.01_interpolation_75.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_0_reg_0.01_interpolation_75.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "100%",
        regularization: 0.01,
        timelimiting: 0,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_0_reg_0.01_interpolation_100.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_0_reg_0.01_interpolation_100.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "0%",
        regularization: 1e-06,
        timelimiting: 0,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_0_reg_1e-06_interpolation_0.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_0_reg_1e-06_interpolation_0.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "25%",
        regularization: 1e-06,
        timelimiting: 0,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_0_reg_1e-06_interpolation_25.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_0_reg_1e-06_interpolation_25.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "50%",
        regularization: 1e-06,
        timelimiting: 0,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_0_reg_1e-06_interpolation_50.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_0_reg_1e-06_interpolation_50.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "75%",
        regularization: 1e-06,
        timelimiting: 0,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_0_reg_1e-06_interpolation_75.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_0_reg_1e-06_interpolation_75.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "100%",
        regularization: 1e-06,
        timelimiting: 0,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_0_reg_1e-06_interpolation_100.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_0_reg_1e-06_interpolation_100.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "0%",
        regularization: 10,
        timelimiting: 5,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_5_reg_10_interpolation_0.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_5_reg_10_interpolation_0.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "25%",
        regularization: 10,
        timelimiting: 5,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_5_reg_10_interpolation_25.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_5_reg_10_interpolation_25.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "50%",
        regularization: 10,
        timelimiting: 5,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_5_reg_10_interpolation_50.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_5_reg_10_interpolation_50.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "75%",
        regularization: 10,
        timelimiting: 5,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_5_reg_10_interpolation_75.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_5_reg_10_interpolation_75.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "100%",
        regularization: 10,
        timelimiting: 5,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_5_reg_10_interpolation_100.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_5_reg_10_interpolation_100.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "0%",
        regularization: 1,
        timelimiting: 5,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_5_reg_1_interpolation_0.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_5_reg_1_interpolation_0.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "25%",
        regularization: 1,
        timelimiting: 5,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_5_reg_1_interpolation_25.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_5_reg_1_interpolation_25.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "50%",
        regularization: 1,
        timelimiting: 5,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_5_reg_1_interpolation_50.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_5_reg_1_interpolation_50.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "75%",
        regularization: 1,
        timelimiting: 5,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_5_reg_1_interpolation_75.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_5_reg_1_interpolation_75.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "100%",
        regularization: 1,
        timelimiting: 5,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_5_reg_1_interpolation_100.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_5_reg_1_interpolation_100.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "0%",
        regularization: 0.01,
        timelimiting: 5,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_5_reg_0.01_interpolation_0.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_5_reg_0.01_interpolation_0.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "25%",
        regularization: 0.01,
        timelimiting: 5,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_5_reg_0.01_interpolation_25.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_5_reg_0.01_interpolation_25.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "50%",
        regularization: 0.01,
        timelimiting: 5,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_5_reg_0.01_interpolation_50.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_5_reg_0.01_interpolation_50.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "75%",
        regularization: 0.01,
        timelimiting: 5,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_5_reg_0.01_interpolation_75.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_5_reg_0.01_interpolation_75.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "100%",
        regularization: 0.01,
        timelimiting: 5,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_5_reg_0.01_interpolation_100.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_5_reg_0.01_interpolation_100.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "0%",
        regularization: 1e-06,
        timelimiting: 5,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_5_reg_1e-06_interpolation_0.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_5_reg_1e-06_interpolation_0.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "25%",
        regularization: 1e-06,
        timelimiting: 5,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_5_reg_1e-06_interpolation_25.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_5_reg_1e-06_interpolation_25.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "50%",
        regularization: 1e-06,
        timelimiting: 5,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_5_reg_1e-06_interpolation_50.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_5_reg_1e-06_interpolation_50.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "75%",
        regularization: 1e-06,
        timelimiting: 5,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_5_reg_1e-06_interpolation_75.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_5_reg_1e-06_interpolation_75.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "100%",
        regularization: 1e-06,
        timelimiting: 5,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_5_reg_1e-06_interpolation_100.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_5_reg_1e-06_interpolation_100.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "0%",
        regularization: 10,
        timelimiting: 15,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_15_reg_10_interpolation_0.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_15_reg_10_interpolation_0.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "25%",
        regularization: 10,
        timelimiting: 15,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_15_reg_10_interpolation_25.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_15_reg_10_interpolation_25.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "50%",
        regularization: 10,
        timelimiting: 15,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_15_reg_10_interpolation_50.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_15_reg_10_interpolation_50.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "75%",
        regularization: 10,
        timelimiting: 15,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_15_reg_10_interpolation_75.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_15_reg_10_interpolation_75.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "100%",
        regularization: 10,
        timelimiting: 15,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_15_reg_10_interpolation_100.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_15_reg_10_interpolation_100.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "0%",
        regularization: 1,
        timelimiting: 15,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_15_reg_1_interpolation_0.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_15_reg_1_interpolation_0.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "25%",
        regularization: 1,
        timelimiting: 15,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_15_reg_1_interpolation_25.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_15_reg_1_interpolation_25.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "50%",
        regularization: 1,
        timelimiting: 15,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_15_reg_1_interpolation_50.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_15_reg_1_interpolation_50.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "75%",
        regularization: 1,
        timelimiting: 15,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_15_reg_1_interpolation_75.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_15_reg_1_interpolation_75.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "100%",
        regularization: 1,
        timelimiting: 15,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_15_reg_1_interpolation_100.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_15_reg_1_interpolation_100.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "0%",
        regularization: 0.01,
        timelimiting: 15,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_15_reg_0.01_interpolation_0.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_15_reg_0.01_interpolation_0.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "25%",
        regularization: 0.01,
        timelimiting: 15,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_15_reg_0.01_interpolation_25.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_15_reg_0.01_interpolation_25.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "50%",
        regularization: 0.01,
        timelimiting: 15,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_15_reg_0.01_interpolation_50.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_15_reg_0.01_interpolation_50.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "75%",
        regularization: 0.01,
        timelimiting: 15,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_15_reg_0.01_interpolation_75.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_15_reg_0.01_interpolation_75.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "100%",
        regularization: 0.01,
        timelimiting: 15,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_15_reg_0.01_interpolation_100.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_15_reg_0.01_interpolation_100.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "0%",
        regularization: 1e-06,
        timelimiting: 15,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_15_reg_1e-06_interpolation_0.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_15_reg_1e-06_interpolation_0.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "25%",
        regularization: 1e-06,
        timelimiting: 15,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_15_reg_1e-06_interpolation_25.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_15_reg_1e-06_interpolation_25.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "50%",
        regularization: 1e-06,
        timelimiting: 15,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_15_reg_1e-06_interpolation_50.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_15_reg_1e-06_interpolation_50.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "75%",
        regularization: 1e-06,
        timelimiting: 15,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_15_reg_1e-06_interpolation_75.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_15_reg_1e-06_interpolation_75.png",
        selected: false
      },
      {
        type: "UOT + Structured Cost Matrix",
        interpolation: "100%",
        regularization: 1e-06,
        timelimiting: 15,
        audioUrl: "results/cicada-water/sounds/cicada_water_uot_limit_15_reg_1e-06_interpolation_100.wav",
        imageUrl: "results/cicada-water/figs/cicada_water_uot_limit_15_reg_1e-06_interpolation_100.png",
        selected: false
      },
    ]
  };
  