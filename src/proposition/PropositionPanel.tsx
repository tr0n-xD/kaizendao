import { PropositionRow } from "./PropositionRow";
import React, { useState } from "react";
import { Proposition } from "../Types";
import { PropositionInfo } from "./PropositionInfo";
import { PropositionVote } from "./PropositionVote";

export function PropositionPanel(props: {propositions: Proposition[]}) {
    const [selectedInfo, setSelectedInfo] = useState<Proposition | undefined>(undefined);
    const [selectedVote, setSelectedVote] = useState<Proposition | undefined>(undefined);

    return (
        <div className='flexColumn gap5' style={{height: '200px', padding: '20px', borderRadius: '10px'}}>
            {selectedInfo &&
              <PropositionInfo proposition={selectedInfo} selectOkay={() => setSelectedInfo(undefined)}/>
            }
            {selectedVote &&
              <PropositionVote proposition={selectedVote} selectOkay={() => setSelectedVote(undefined)}/>
            }
            {selectedInfo === undefined && selectedVote === undefined &&
              <div className='flexColumn gap5'>
                <div style={{fontSize: '20px'}}>Active DAO propositions:</div>
                  {props.propositions.map(p =>
                      <PropositionRow key={p.id}
                                      proposition={p}
                                      selectInfo={() => setSelectedInfo(p)}
                                      selectVote={() => setSelectedVote(p)}
                      />
                  )}
              </div>
            }
        </div>
    );
}
