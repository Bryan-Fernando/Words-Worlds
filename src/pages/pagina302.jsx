import React from "react";
import styles from "./pagina302.module.css";

const Pagina302 = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.exercisesTitle}>Short Dialogues</h1>

      <section className={styles.exerciseSection}>
        <div className={styles.exerciseContainer}>
          <div className={styles.exerciseContent}>
            
            {/* 1: Giving Advice */}
            <div className={styles.dialogueSection}>
              <h3 className={styles.sectionTitle}>1: Giving Advice</h3>
              <div className={styles.dialogueContainer}>
                <div className={styles.dialogueLine} data-speaker="Anna">
                  <span className={styles.speakerAnna}>Anna:</span> I have a headache.
                </div>
                <div className={styles.dialogueLine} data-speaker="Ben">
                  <span className={styles.speakerBen}>Ben:</span> You should drink some water.
                </div>
                <div className={styles.dialogueLine} data-speaker="Anna">
                  <span className={styles.speakerAnna}>Anna:</span> Good idea. Should I rest too?
                </div>
                <div className={styles.dialogueLine} data-speaker="Ben">
                  <span className={styles.speakerBen}>Ben:</span> Yes, you should.
                </div>
              </div>
            </div>

            {/* 2: Asking for Suggestions */}
            <div className={styles.dialogueSection}>
              <h3 className={styles.sectionTitle}>2: Asking for Suggestions</h3>
              <div className={styles.dialogueContainer}>
                <div className={styles.dialogueLine} data-speaker="Tom">
                  <span className={styles.speakerTom}>Tom:</span> Should we play outside?
                </div>
                <div className={styles.dialogueLine} data-speaker="Lisa">
                  <span className={styles.speakerLisa}>Lisa:</span> No, we shouldn't. It's raining.
                </div>
                <div className={styles.dialogueLine} data-speaker="Tom">
                  <span className={styles.speakerTom}>Tom:</span> How about watching a movie?
                </div>
                <div className={styles.dialogueLine} data-speaker="Lisa">
                  <span className={styles.speakerLisa}>Lisa:</span> Great idea!
                </div>
              </div>
            </div>

            {/* 3: Talking about Plans */}
            <div className={styles.dialogueSection}>
              <h3 className={styles.sectionTitle}>3: Talking about Plans</h3>
              <div className={styles.dialogueContainer}>
                <div className={styles.dialogueLine} data-speaker="Sara">
                  <span className={styles.speakerSara}>Sara:</span> Should I bring my jacket?
                </div>
                <div className={styles.dialogueLine} data-speaker="Paul">
                  <span className={styles.speakerPaul}>Paul:</span> Yes, it might be cold.
                </div>
                <div className={styles.dialogueLine} data-speaker="Sara">
                  <span className={styles.speakerSara}>Sara:</span> Should we leave now?
                </div>
                <div className={styles.dialogueLine} data-speaker="Paul">
                  <span className={styles.speakerPaul}>Paul:</span> Yes, we should.
                </div>
              </div>
            </div>

            {/* 4: Giving Warnings */}
            <div className={styles.dialogueSection}>
              <h3 className={styles.sectionTitle}>4: Giving Warnings</h3>
              <div className={styles.dialogueContainer}>
                <div className={styles.dialogueLine} data-speaker="Mom">
                  <span className={styles.speakerMom}>Mom:</span> You shouldn't run in the house.
                </div>
                <div className={styles.dialogueLine} data-speaker="Child">
                  <span className={styles.speakerChild}>Child:</span> Why?
                </div>
                <div className={styles.dialogueLine} data-speaker="Mom">
                  <span className={styles.speakerMom}>Mom:</span> You could fall. You should walk slowly.
                </div>
                <div className={styles.dialogueLine} data-speaker="Child">
                  <span className={styles.speakerChild}>Child:</span> Okay, Mom.
                </div>
              </div>
            </div>

            {/* 5: Discussing Chores */}
            <div className={styles.dialogueSection}>
              <h3 className={styles.sectionTitle}>5: Discussing Chores</h3>
              <div className={styles.dialogueContainer}>
                <div className={styles.dialogueLine} data-speaker="Dad">
                  <span className={styles.speakerDad}>Dad:</span> Should you clean your room today?
                </div>
                <div className={styles.dialogueLine} data-speaker="Son">
                  <span className={styles.speakerSon}>Son:</span> Yes, I should.
                </div>
                <div className={styles.dialogueLine} data-speaker="Dad">
                  <span className={styles.speakerDad}>Dad:</span> Do you need any help?
                </div>
                <div className={styles.dialogueLine} data-speaker="Son">
                  <span className={styles.speakerSon}>Son:</span> No, thanks!
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Pagina302;
